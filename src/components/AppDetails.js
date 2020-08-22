/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import _ from 'lodash';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {TouchableOpacity} from 'react-native-gesture-handler';

class AppointmentDetails extends Component {
  render() {
    const onPress = _.get(this.props, ['onPress'], () => {});
    const isInteractive = _.get(this.props, ['isInteractive']);
    const appointment = _.get(this.props, ['appointment', 'item'], {});
    const {doctor, time, location, notes} = appointment;
    if (isInteractive) {
      return (
        <TouchableOpacity style={styles.wrapper} onPress={onPress}>
          <Text>{time}</Text>
          <Text>{doctor}</Text>
          <Text>{notes}</Text>
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
      );
    }

    return (
      <View style={styles.wrapper} onPress={onPress}>
        <Text>{time}</Text>
        <Text>{doctor}</Text>
        <Text>{notes}</Text>
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: '100%',
    backgroundColor: 'pink',
  },
  map: {
    width: '100%',
    height: '100%',
    borderWidth: 1,
  },
  mapWrapper: {
    flex: 1,
    backgroundColor: 'yellow',
    width: '100%',
  },
});

export default AppointmentDetails;
