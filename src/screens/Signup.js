/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar, View} from 'react-native';
import AppButton from '../components/AppButton';
import AppInputText from '../components/AppInputText';
import Logo from '../components/Logo';

const Signup = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Logo />
        <View style={styles.inputWrapper}>
          <AppInputText placeholder="email" />
        </View>
        <View style={styles.inputWrapper}>
          <AppInputText placeholder="password" />
        </View>
        <View style={styles.inputWrapper}>
          <AppInputText placeholder="repeat password" />
        </View>
        <View style={styles.buttonWrapper}>
          <AppButton title="Sign Up" />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputWrapper: {
    width: '100%',
  },
  buttonWrapper: {
    width: '100%',
    alignItems: 'center',
  },
});

export default Signup;
