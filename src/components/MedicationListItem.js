/* eslint-disable keyword-spacing */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
// medications (your choice of medication name). Data: medication name,
// dosage, frequency. E.g. Tylenol, 1 tablet, 4 times/day, cost
const MedicationListItem = ({price = 4.99}) => {
  return (
    <TouchableOpacity
      style={medStyles.itemWrapper}
      onPress={() => console.log('pressed')}>
      <View>
        <Text style={medStyles.itemTitle}>Ibuprofen 500mg</Text>
        <View style={medStyles.subHeader}>
          <Text style={medStyles.dosage}>2 Pills</Text>
          <Text>x</Text>
          <Text style={medStyles.frequency}>Daily</Text>
        </View>
        <View style={medStyles.cost}>
          <Text>Cost: </Text>
          <Text>${price}</Text>
        </View>
      </View>
      <View style={medStyles.imageWrapper}>
        <Image
          style={medStyles.image}
          source={require('../assets/ibuprofen.jpg')}
        />
      </View>
    </TouchableOpacity>
  );
};

const medStyles = StyleSheet.create({
  dosage: {
    marginRight: 5,
  },
  frequency: {
    marginLeft: 5,
  },
  cost: {
    flexDirection: 'row',
  },
  itemTitle: {
    fontWeight: 'bold',
  },
  subHeader: {
    flexDirection: 'row',
  },
  itemWrapper: {
    width: '100%',
    backgroundColor: 'green',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageWrapper: {
    height: 40,
    width: 40,
  },
});

export default MedicationListItem;
