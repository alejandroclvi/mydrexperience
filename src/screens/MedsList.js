/* eslint-disable keyword-spacing */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, View, StatusBar} from 'react-native';
import MedicationListItem from '../components/MedicationListItem';

const MedList = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.chartWrapper} />
        <View style={styles.MedicationListWrapper}>
          <MedicationListItem />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chartWrapper: {
    backgroundColor: 'red',
    flex: 1,
  },
  MedicationListWrapper: {
    backgroundColor: 'yellow',
    flex: 3,
  },
});

export default MedList;
