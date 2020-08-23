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
  View,
  StatusBar,
  Image,
} from 'react-native';
import _ from 'lodash';
import moment from 'moment';
import AppointmentDetails from '../components/AppDetails';

class Home extends Component {
  render() {
    const {user, medications, upcomingAppt} = this.props;
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
          <View style={styles.mainWrapper}>
            <Text style={styles.greeting}>
              Welcome back, {_.get(user, ['name'], 'user')}!
            </Text>
            {/* <Image></Image> */}
            <View style={styles.imageWrapper}/>
          </View>
          <View style={styles.medicWrapper}>
            <Text style={styles.medTime}>
              Your next medication is at {_.get(medications, [0, 'time'])}
            </Text>
            <Image
              style={styles.medImage}
              source={require('../assets/ibuprofen.jpg')}
            />
          </View>
          <View style={styles.apptWrapper}>
            <Text style={styles.apptHeader}>Upcomming appointment</Text>
            <AppointmentDetails appointment={upcomingAppt} />
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
  imageWrapper: {
    width: 100,
    height: 100,
    backgroundColor: 'pink',
    borderRadius: 50,
  },
  apptHeader: {
    fontSize: 16,
    marginBottom: 10,
  },
  medImage: {
    height: '33%',
    width: '33%',
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
    //color: '#71099e',
  },
  medTime: {
    marginLeft: 30,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#71099e',
  },
  mainWrapper: {
    flex: 0.2,
    paddingTop: 30,
    paddingLeft: 30,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  medicWrapper: {
    flex: 1,
    paddingTop: 30,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  apptWrapper: {
    backgroundColor: 'red',
    flex: 1,
    padding: 20,
  },
});

Home.defaultProps = {
  user: {
    name: 'Manuel',
    lastName: 'Calvino',
  },
  medications: [
    {
      time: moment().format('ddd hh:mm a'),
    },
  ],
  upcomingAppt: {
    dr: 'Manuel Calvino',
    time: moment().format('Ddd hh:mm a'),
    notes: 'Fasting visit',
  },
};

export default Home;
