/* eslint-disable keyword-spacing */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  FlatList,
} from 'react-native';
import MedicationListItem from '../components/MedicationListItem';

const MedList = ({medicaments, navigation}) => {
  const onPress = (med) => navigation.navigate('MedDetails', med);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.chartWrapper} />
        <View style={styles.MedicationListWrapper}>
          <FlatList
            renderItem={({item}) => (
              <MedicationListItem medicament={item} onPress={onPress} />
            )}
            data={medicaments}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

MedList.defaultProps = {
  medicaments: [
    {
      name: 'Ibuprofen',
      frequency: 'Daily',
      dosis: '2 Pills',
      cost: 4.99,
    },
    {
      name: 'Ibuprofen',
      frequency: 'Daily',
      dosis: '2 Pills',
      cost: 4.99,
    },
    {
      name: 'Ibuprofen',
      frequency: 'Daily',
      dosis: '2 Pills',
      cost: 4.99,
    },
    {
      name: 'Ibuprofen',
      frequency: 'Daily',
      dosis: '2 Pills',
      cost: 4.99,
    },
    {
      name: 'Ibuprofen',
      frequency: 'Daily',
      dosis: '2 Pills',
      cost: 4.99,
    },
  ],
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
    height: '70%',
    width: '100%',
  },
});

export default MedList;
