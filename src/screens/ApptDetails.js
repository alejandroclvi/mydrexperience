/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text, StatusBar, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import AppButton from '../components/AppButton';

const ApptDetails = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.details}>
          <View>
            <View style={styles.dSeparator}>
              <Text style={styles.key}>Doctor</Text>
              <Text style={styles.sub}>Dr Manuel Calvino</Text>
            </View>
            <View style={styles.dSeparator}>
              <Text style={styles.key}>Date</Text>
              <Text style={styles.sub}>June Monday 14th, 3pm</Text>
            </View>
            <View style={styles.dSeparator}>
              <Text style={styles.key}>Doctor's notes</Text>
              <Text style={styles.sub}>Notes from the doctor....</Text>
            </View>
          </View>
          <View style={styles.mapWrapper}>
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
          <View style={styles.btnWrapper}>
            <AppButton title="Re-schedule" />
            <AppButton title="Cancel Appt" />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btnWrapper: {
    width: '100%',
  },
  dSeparator: {
    width: '100%',
    padding: 10,
    paddingLeft: 20,
    height: 60,
  },
  key: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  sub: {
    marginLeft: 10,
  },
  details: {
    justifyContent: 'flex-start',
    flex: 3,
  },
  mapWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.5,
    marginTop: 50,
    marginBottom: 50,
  },
  map: {
    width: '90%',
    height: '90%',
    borderRadius: 10,
  },
});

export default ApptDetails;
