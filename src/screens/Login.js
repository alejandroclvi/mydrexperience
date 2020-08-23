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
  AsyncStorage,
} from 'react-native';
import AppButton from '../components/AppButton';
import AppInputText from '../components/AppInputText';
import Logo from '../components/Logo';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  retrieveUser = async (email) => {
    try {
      const user_raw_data = await AsyncStorage.getItem(email);
      if (email !== null) {
        // We have data!!
        const user = JSON.parse(user_raw_data);
        return user;
      }
      return null;
    } catch (error) {
      // Error retrieving data
    }
  };

  logUserIn = async (email) => {
    try {
      await AsyncStorage.setItem('user', email);
    } catch (error) {
      // Error saving data
    }
  };

  login = async () => {
    // TODO: sanitize input
    const {email, password} = this.state;
    const user = await this.retrieveUser(email);
    if (user && user.password === password) {
      //log user in
      await this.logUserIn(email);
      this.setState({email: '', password: ''});
      this.props.navigation.navigate('HomeTabNavigator');
    } else {
      // show "user not found" message
    }
  };

  render() {
    const {navigation} = this.props;
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
          <Logo />
          <View style={styles.inputWrapper}>
            <AppInputText
              placeholder="email"
              onChangeText={(text) => this.setState({email: text})}
            />
          </View>
          <View style={styles.inputWrapper}>
            <AppInputText
              placeholder="password"
              onChangeText={(text) => this.setState({password: text})}
            />
          </View>
          <View style={styles.buttonWrapper}>
            <AppButton title="Log In" onPress={this.login} />
            <AppButton
              title="Sign Up"
              onPress={() => navigation.navigate('Signup')}
            />
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

export default Login;
