/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text, StatusBar} from 'react-native';
import {appName} from '../../app.json';
import AppButton from '../components/AppButton';

const Welcome = ({componentId}) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Text>Welcome</Text>
        <Text>We are so that you've joined us!</Text>
        <AppButton
          title="Done"
          onPress={() => {
            Navigation.push(componentId, {
              component: {
                name: `com.${appName}.home`,
              },
            });
          }}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default Welcome;
