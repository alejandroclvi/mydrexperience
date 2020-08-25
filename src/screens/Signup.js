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
  StatusBar,
  View,
} from 'react-native';
import AppButton from '../components/AppButton';
import AppInputText from '../components/AppInputText';
import Logo from '../components/Logo';
import AsyncStorage from '@react-native-community/async-storage';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      rPassword: '',
    };
  }

  logUserIn = async (email) => {
    try {
      await AsyncStorage.setItem('user', email);
    } catch (error) {
      // Error saving data
    }
  };

  signup = async () => {
    const {email, password, rPassword} = this.state;
    // TODO: sanitize input
    if (email && password && rPassword && password === rPassword) {
      // all fields are filled, sign user up
      try {
        await AsyncStorage.setItem(email, JSON.stringify({email, password}));
        // log user in
        await this.logUserIn(email);
        // navigate home
        this.props.navigation.navigate('HomeTabNavigator');
      } catch (error) {
        // Error saving data
      }
    } else {
      // show message indicating to complete all empty fields
    }
  };

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
          <Logo />
          <View style={styles.inputWrapper}>
            <AppInputText
              onChangeText={(text) => this.setState({email: text})}
              placeholder="email"
            />
          </View>
          <View style={styles.inputWrapper}>
            <AppInputText
              onChangeText={(text) => this.setState({password: text})}
              placeholder="password"
            />
          </View>
          <View style={styles.inputWrapper}>
            <AppInputText
              onChangeText={(text) => this.setState({rPassword: text})}
              placeholder="repeat password"
            />
          </View>
          <View style={styles.buttonWrapper}>
            <AppButton title="Sign Up" onPress={this.signup} />
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
