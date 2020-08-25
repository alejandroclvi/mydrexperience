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
import { withCreateUser } from '../queries';
import _ from 'lodash';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      rPassword: '',
      name: '',
    };
  }

  logUserIn = async (id) => {
    try {
      await AsyncStorage.setItem('user', id);
    } catch (error) {
      // Error saving data
    }
  };

  signup = async () => {
    const {email, password, rPassword, name} = this.state;
    // TODO: sanitize input
    if (email && password && rPassword && password === rPassword) {
      // all fields are filled, sign user up
      try {
        const user_result = await this.props.createUser({
          variables: {
            input: {
              user: {
                email,
                password,
                name,
              }
            }
          },
        });
        const id = (_.get(user_result, ['data', 'createUser', 'user', 'id'], 0)).toString();
        await AsyncStorage.setItem(email, JSON.stringify({email, password, id}));
        // log user in
        await this.logUserIn(id);
        // navigate home
        console.log('jajajajajajaj')
        this.props.navigation.navigate('HomeTabNavigator');
      } catch (error) {
        // Error saving data
        console.log('error: ', error);
      }
    } else {
      // show message indicating to complete all empty fields
    }
  };

  render() {
    const { email, password, rPassword, name } = this.state;
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
          <Logo />
          <View style={styles.inputWrapper}>
            <AppInputText
              value={email}
              onChangeText={(text) => this.setState({email: text})}
              placeholder="email"
            />
          </View>
          <View style={styles.inputWrapper}>
            <AppInputText
              value={name}
              onChangeText={(text) => this.setState({name: text})}
              placeholder="name"
            />
          </View>
          <View style={styles.inputWrapper}>
            <AppInputText
              encrypt
              value={password}
              onChangeText={(text) => this.setState({password: text})}
              placeholder="password"
            />
          </View>
          <View style={styles.inputWrapper}>
            <AppInputText
              encrypt
              value={rPassword}
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
    backgroundColor: 'white',
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

export default withCreateUser(Signup);
