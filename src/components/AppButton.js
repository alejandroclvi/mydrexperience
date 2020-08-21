/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const AppButton = ({title, onPress}) => {
  return (
    <>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity onPress={onPress} style={styles.button}>
          <Text>{title}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 6,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'red',
    margin: 5,
    borderRadius: 10,
  },
  buttonWrapper: {
    width: '100%',
    alignItems: 'center',
  },
});

AppButton.defaultProps = {
  onPress: () => console.log('app button pressed'),
};

export default AppButton;
