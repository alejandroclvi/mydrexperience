/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

const AppInputText = ({placeholder, onChangeText, value ='', onFocus}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        onFocus={onFocus}
        value={value}
        style={styles.input}
        autoCapitalize='none'
        onChangeText={onChangeText}
        placeholder={`${placeholder}`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '90%',
    height: 50,
    borderWidth: 1,
    borderColor: '#1e90ff',
    paddingLeft: 20,
    borderRadius: 5,
    margin: 5,
  },
});

export default AppInputText;
