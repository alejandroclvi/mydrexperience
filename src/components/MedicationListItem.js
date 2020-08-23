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
const MedicationListItem = ({medicament, onPress}) => {
  console.log('meeeee', medicament);
  const {cost, name, dosis, frequency} = medicament;
  return (
    <TouchableOpacity
      style={styles.itemWrapper}
      onPress={() => onPress(medicament)}>
      <View>
        <View style={styles.section}>
          <Text style={styles.itemTitle}>{name}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.itemTitle}>Dosis </Text>
          <Text style={styles.dosage}>{dosis}</Text>
          <Text style={styles.frequency}>{frequency}</Text>
        </View>
        <View style={styles.cost}>
          <Text style={styles.itemTitle}>Cost </Text>
          <Text>${cost}</Text>
        </View>
      </View>
      <View style={styles.imageWrapper}>
        <Image
          style={styles.image}
          source={require('../assets/ibuprofen.jpg')}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  dosage: {
    marginRight: 5,
  },
  frequency: {
    color: 'black',
    fontStyle: 'italic',
  },
  cost: {
    flexDirection: 'row',
  },
  itemTitle: {
    fontWeight: 'bold',
  },
  section: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  itemWrapper: {
    marginTop: 10,
    alignSelf: 'center',
    width: '90%',
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'white',
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
