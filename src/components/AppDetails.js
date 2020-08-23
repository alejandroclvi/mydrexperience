/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import _ from 'lodash';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {TouchableOpacity} from 'react-native-gesture-handler';

class AppointmentDetails extends Component {
  render() {
    const onPress = _.get(this.props, ['onPress'], () => {});
    const appointment = _.get(this.props, ['appointment', 'item'], {});
    const {doctor, time, location, notes} = appointment;
    return (
      <View style={{}}>
        <TouchableOpacity style={styles.wrapper} onPress={onPress}>
          <View style={styles.section}>
            {/** TODO: properly format time */}
            <Text style={styles.header}>{'July 23rd, 04:30 pm' || time}</Text>
          </View>
          <View style={styles.section}>
            <Text>{doctor}</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.notes}>{notes}</Text>
          </View>
          <View style={styles.mapWrapper}>
            {/** Todo show location with marker */}
            <MapView
              style={styles.map}
              // provider={PROVIDER_GOOGLE}
              region={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 5,
    height: windowHeight * 0.25,
  },
  notes: {
    color: 'grey',
    marginBottom: 10,
  },
  header: {
    fontWeight: 'bold',
  },
  map: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  section: {
    marginBottom: 5,
    flexDirection: 'row',
  },
  mapWrapper: {
    flex: 1,
    width: '100%',
  },
});

export default AppointmentDetails;
