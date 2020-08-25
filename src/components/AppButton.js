/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const AppButton = ({title, onPress, disabled}) => {
  if(disabled) {
    return (
      <View style={styles.buttonWrapper}>
        <View style={styles.button}>
          <Text style={{color: 'grey', fontWeight: 'bold'}}>{title}</Text>
        </View>
      </View>
    );
  }
  const enabledStyle = [styles.button, styles.enabled];
  return (
    <View style={styles.buttonWrapper}>
      <TouchableOpacity onPress={onPress} style={enabledStyle}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 6,
    margin: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#1e90ff',
    shadowRadius: 4,
    shadowOffset: {width: 1, height: 4},
    shadowOpacity: 0.15,
  },
  title: {
    fontWeight: 'bold',
    color: 'white',
  },
  enabled: {
    backgroundColor: '#1e90ff',
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
