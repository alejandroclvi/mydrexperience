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
import MapView, {Marker} from 'react-native-maps';
import {TouchableOpacity} from 'react-native-gesture-handler';
import moment from 'moment';

class AppointmentDetails extends Component {
  render() {
    const onPress = _.get(this.props, ['onPress'], () => {});
    const appointment = _.get(this.props, ['appointment', 'item'], {});
    const {doctor, time, date, location} = appointment;
    const latitude = location.lat;
    const longitude = location.lng;
    return (
      <View >
        <TouchableOpacity style={styles.wrapper} onPress={onPress}>
          <View style={styles.section}>
            <Text style={styles.header}>{moment(date).format('MMM Do, YYYY')} {time}</Text>
          </View>
          <View style={styles.section}>
            <Text>Dr {doctor}</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.notes}>{location.address}</Text>
          </View>

          <View style={styles.mapWrapper}>
            {/** Todo show location with marker */}
            <MapView
              style={styles.map}
              // provider={PROVIDER_GOOGLE}
              zoomEnabled={false}
              scrollEnabled={false}
              region={{
                latitude: latitude || 37.78825,
                longitude: longitude || -122.4324,
                latitudeDelta: 0.0052,
                longitudeDelta: 0.0051,
              }}
            >
              {latitude && longitude && <Marker coordinate={{latitude, longitude}}/>}
            </MapView>
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
    shadowRadius: 4,
    shadowOffset: {width: 1, height: 4},
    shadowOpacity: 0.15,
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
  address: {
    alignItems: 'flex-end',
    paddingRight: 10,
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
