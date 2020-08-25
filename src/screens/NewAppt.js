/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, Text, StatusBar, View, TouchableOpacity} from 'react-native';
import AppInputText from '../components/AppInputText';
import AppButton from '../components/AppButton';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';
import _ from 'lodash';
import { withCreateAppointment, USER_APPOINTMENTS } from '../queries';

function LocationInput({onPress, value}) {
  return (
    <TouchableOpacity style={inputStyle.container} onPress={onPress}>
      <View style={inputStyle.wrapper}>
        <Text style={value ? null : inputStyle.placeholder}>{value||'Select Location....'}</Text>
      </View>
    </TouchableOpacity>
  );
}
const inputStyle = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholder: {
    color: 'grey',
  },
  wrapper: {
    justifyContent: 'center',
    paddingLeft: 20,
    width: '90%',
    height: 50,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#1e90ff',
  },
});
// docotr, date & time, location
class NewAppt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPickDateVisible: false,
      isPickTimeVisible: false,
      doctor:'',
      address:'',
      date: null,
      time:  null,
    }
  }
  componentDidUpdate() {
    console.log(this.state);
  }
  getAddressCoords = (address='') => {
    return fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address.replace(' ', '+')}&key=AIzaSyCH3uGh1D8wrG0yM7OF6gIjJ1SDgxSI08M`)
    .then(result => result.json())
    .catch(console.log); // TODO: handle this error
  }
  createAppointment = async () => {
    const {doctor, address, date, time} = this.state;
    const {lat, lng} = _.get(await this.getAddressCoords(address), ['results', 0, 'geometry', 'location']);
    const input = {doctor, userId: 1, location: {address, lat, lng}, date, time};
    return this.props.createAppointment({
      variables: {input: {appointment: input}},
      refetchQueries: [{
        query: USER_APPOINTMENTS,
        variables: { userId: 1 },
      }]
    })
    .then(result => this.props.navigation.goBack())
    // TODO: show error message
    .catch(console.log)
  };
  render() {
    const { isPickDateVisible, isPickTimeVisible, doctor, address, date, time } = this.state;
    const { navigation } = this.props;
    const canSaveAppt = doctor && address && date && time ? false : true;
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
          <View style={styles.section}>
            <AppInputText placeholder='doctor' value={doctor} onChangeText={text => this.setState({doctor: text})}/>
          </View>
          <View style={styles.section}>
            <LocationInput
              value={address} 
              onPress={() => navigation.navigate('AddressScreen', {onAddressSelected: address => this.setState({address: _.get(address, ['description'])})})}
            />
          </View>
          <View style={styles.section}>
            <AppInputText value={date} placeholder='date' onFocus={() => this.setState({isPickDateVisible: true})}/>
          </View>
          <View style={styles.section}>
            <AppInputText value={time} placeholder='time' onFocus={() => this.setState({isPickTimeVisible: true})}/>
          </View>
          <DateTimePickerModal
            isVisible={isPickDateVisible}
            mode="date"
            value={(date)}
            onConfirm={(data) => this.setState({date: moment.utc(data).format('YYYY-MM-DD'), isPickDateVisible: false})}
            onCancel={() => this.setState({isPickDateVisible: false})}
          />
          <DateTimePickerModal
            value={time}
            isVisible={isPickTimeVisible}
            mode="time"
            onConfirm={(data) => this.setState({time: moment(data).format('hh:mm a'), isPickTimeVisible: false})}
            onCancel={() => this.setState({isPickTimeVisible: false})}
          />
          <View style={styles.btnWrapper}>
            <AppButton title="SAVE" disabled={canSaveAppt} onPress={this.createAppointment} />
            <AppButton title="CANCEL" />
          </View>
        </SafeAreaView>
      </>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 40,
  },
  section: {
    width: '100%',
  },
  btnWrapper: {
    width: '100%',
    position: 'absolute',
    bottom: 10,
  },
});

export default withCreateAppointment(NewAppt);
