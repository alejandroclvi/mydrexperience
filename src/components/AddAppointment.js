/**
 * @flow
 */

import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';

const AddAppointment = ({onPress}) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <Icon name="plus-circle" type="feather" size={30} color={'white'} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: '#1e90ff',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 18,
    right: 20,
    shadowRadius: 5,
    shadowOffset: {width: 0.5, height: 4},
    shadowOpacity: 0.45,
  },
  addIcon: {
    fontSize: 28,
    color: 'white',
  },
});

export default AddAppointment;
