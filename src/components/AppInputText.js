/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

const Login = ({placeholder}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.input} placeholder={`${placeholder}`} />
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
    height: 60,
    borderWidth: 1,
    borderColor: 'green',
    paddingLeft: 20,
    borderRadius: 30,
    margin: 5,
  },
});

export default Login;
