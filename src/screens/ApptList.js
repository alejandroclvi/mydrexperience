/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  FlatList,
  View,
} from 'react-native';
import AppDetails from '../components/AppDetails';
import AddAppointment from '../components/AddAppointment';
import moment from 'moment';
import _ from 'lodash';
import { withAppointments } from '../queries';
import AsyncStorage from '@react-native-community/async-storage';

// TODO: Show only three appointments at a time

function renderAppointment(appointmet, navigation) {
  const onAppointmentTap = () =>
    navigation.navigate('ApptDetails', _.get(appointmet, ['item'], {}));
  return (
    <AppDetails
      appointment={appointmet}
      onPress={onAppointmentTap}
      isInteractive
    />
  );
}

class ApptList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appointments: [],
    };
  }
  retrieveUserAppointments = async () => {
    try {
      const user_email = (await AsyncStorage.getItem('user')||'');
      const user_data = await AsyncStorage.getItem(user_email);
      const appointments = _.get(user_data, ['appointments'], []);
      this.setState({appointments});
    } catch (error) {
      console.log('error', error);
      // Error retrieving data
    }
  };

  componentDidMount() {
    this.retrieveUserAppointments();
  }
  render() {
    const {navigation} = this.props;
    const appointments = _.get(this.props, ['withAppointments', 'appointments', 'nodes'], []);
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
          <View style={styles.wrapper}>
            <FlatList
              data={appointments}
              renderItem={(item) => renderAppointment(item, navigation)}
              keyExtractor={(item, index) => `${index}`}
            />
          </View>
          <AddAppointment onPress={() => navigation.navigate('NewAppt')} />
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    height: '100%',
    width: '100%',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 20,
    paddingTop: 10,
  },
});

ApptList.defaultProps = {
  appointments: [
    {
      doctor: 'Dr Manuel Calvino',
      notes: 'Please come to the visit...',
      location: {lat: 33.3333, lon: 33.3333},
      time: moment().format('Ddd hh:mm a'),
    },
    {
      doctor: 'Dr Manuel Calvino',
      notes: 'Please come to the visit...',
      location: {lat: 33.3333, lon: 33.3333},
      time: moment().format('Ddd hh:mm a'),
    },
    {
      doctor: 'Dr Manuelll Calvino',
      notes: 'Please come to the visit...',
      location: {lat: 33.3333, lon: 33.3333},
      time: moment().format('Ddd hh:mm a'),
    },
  ],
};

export default withAppointments(ApptList);
