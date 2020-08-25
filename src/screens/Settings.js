/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  View,
} from 'react-native';
import AppButton from '../components/AppButton';
// TODO: make fields mutable
import AsyncStorage from '@react-native-community/async-storage';

class Settings extends Component {
  logUserOut = async () => {
    try {
      await AsyncStorage.setItem('user', '');
      this.props.navigation.popToTop();
    } catch (error) {
      // Error saving data
    }
  };

  render() {
    const {name, email} = this.props;
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
          <View style={styles.section}>
            <Text style={styles.header}>Name</Text>
            <Text style={styles.subHeader}>{name || 'Manuel Calvino'}</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.header}>Email</Text>
            <Text style={styles.subHeader}>
              {email || 'mcalvinolaguardia@gmail.com'}
            </Text>
          </View>
          <View style={styles.btnWrapper}>
            <AppButton title="Log Out" onPress={this.logUserOut} />
          </View>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subHeader: {
    paddingLeft: 10,
    marginTop: 10,
  },
  header: {
    fontWeight: 'bold',
  },
  section: {
    width: '100%',
    padding: 20,
  },
  btnWrapper: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
  },
});

export default Settings;
