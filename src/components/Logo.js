/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {StyleSheet, Image, View} from 'react-native';

const Logo = () => {
  return (
    <View style={styles.logoContainer}>
      <Image style={styles.logoStyle} source={require('../assets/logo.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoStyle: {
    height: '60%',
    width: '60%',
    resizeMode: 'contain',
  },
});

export default Logo;
