/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import _ from 'lodash';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

class AppointmentDetails extends Component {
  render() {
    return (
      <View style={apptStyles.wrapper}>
        <Text>Monday, 24th at 3:15pm</Text>
        <Text>Dr. Manuel Calvino</Text>
        <Text>Come fasting</Text>
        <View style={apptStyles.mapWrapper}>
          <MapView
            style={{width: '100%', height: '100%', borderWidth: 1}}
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

const apptStyles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: '100%',
    backgroundColor: 'pink',
  },
  mapWrapper: {
    flex: 1,
    backgroundColor: 'yellow',
    width: '100%',
  },
});

export default AppointmentDetails;