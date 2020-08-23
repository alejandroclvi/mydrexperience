/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';
import AppButton from '../components/AppButton';

const MedDetails = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.headerWrapper}>
          <Text style={styles.title}>Ibuprofen</Text>
          <Image
            style={styles.img}
            source={require('../assets/ibuprofen.jpg')}
          />
        </View>
        <View style={styles.details}>
          <View style={styles.section}>
            <Text style={styles.subHeader}>Dosage</Text>
            <Text style={styles.value}>2 Pills</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.subHeader}>Frequency</Text>
            <Text style={styles.value}>Daily</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.subHeader}>Cost</Text>
            <Text style={styles.value}>$4.99</Text>
          </View>
        </View>
        <View style={styles.btnWrapper}>
          <AppButton title="Re-fill" />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btnWrapper: {
    backgroundColor: 'white',
    paddingBottom: 30,
  },
  value: {
    marginLeft: 10,
    marginTop: 5,
  },
  subHeader: {
    fontWeight: 'bold',
  },
  section: {
    padding: 30,
    width: '100%',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 20,
  },
  headerWrapper: {
    width: '100%',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  details: {
    flex: 1,
    backgroundColor: 'white',
  },
  img: {
    width: 150,
    height: 150,
  },
});

export default MedDetails;
