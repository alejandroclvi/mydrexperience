/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar, FlatList} from 'react-native';
import AppDetails from '../components/AppDetails';
import moment from 'moment';
import _ from 'lodash';

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

const ApptList = ({appointments, navigation}) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <FlatList
          data={appointments}
          renderItem={(item) => renderAppointment(item, navigation)}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

export default ApptList;
