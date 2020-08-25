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
import AppointmentDetails from '../components/NotificationDetails';
import {withUsers} from '../queries';

function Notification({notification, type}) {
  // if notification type is not appt, render a med notification
  if (type === 'med') {
    const {medication, time} = notification;
    return (
      <View style={NotStyles.wrapper}>
        <View style={NotStyles.details}>
          <View style={NotStyles.row}>
            <Text style={NotStyles.title}>Take medication </Text>
            <Text>{medication}</Text>
          </View>
          <View style={NotStyles.row}>
            <Text style={NotStyles.title}>@ </Text>
            <Text>{time || '5: 46pm'}</Text>
          </View>
        </View>
        <Image
          style={NotStyles.img}
          source={require('../assets/ibuprofen.jpg')}
        />
      </View>
    );
  }
  return (
    <View style={NotStyles.wrapper}>
      <AppointmentDetails appointment={notification} />
    </View>
  );
}

const NotStyles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    borderRadius: 10,
    padding: 20,
    marginTop: 10,
  },
  img: {
    height: 30,
    width: 30,
  },
  details: {
    width: '80%',
  },
  row: {
    flexDirection: 'row',
  },
  title: {
    fontWeight: 'bold',
  },
});

// TODO: remove when using real data
const not = {
  type: 'med',
  notification: {
    medication: 'Ibuprofen',
    time: '5:46 pm',
  },
};

const not_app = {
  type: 'appt',
  notification: {
    doctor: 'Manuel Calvino',
    time: moment().format('Ddd hh:mm a'),
    notes: 'Fasting visit',
  },
};

class Home extends Component {
  render() {
    const {user, medications, upcomingAppt} = this.props;
    console.log('props.', this.props);
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
          <View style={styles.mainWrapper}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.greeting}>
              Welcome back,
            </Text>
            <Text style={[styles.greeting, {marginLeft: 3, color: '#6975ff'}]}>{_.get(user, ['name'], 'user')}!</Text>
          </View>
            <View style={styles.imageWrapper}>
              <Image
                style={styles.img}
                source={require('../assets/profile.png')}
              />
            </View>
          </View>
          <View style={styles.notifications}>
            <View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.header}>Notifications</Text>
              <View style={styles.notWrapper}><Text style={{color: 'white', fontWeight: 'bold'}}>2</Text></View>
            </View>

              <View style={styles.notificationsWrapper}>
                {/** TODO: use a flatlist to render notifications */}
                <Notification {...not} />
                <Notification {...not_app} />
              </View>
            </View>
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
  notWrapper: {
    backgroundColor: '#6975ff',
    padding: 5,
    borderRadius: 2.5,
    marginLeft: 10,
  },
  notificationsWrapper: {
    width: '100%',
    height: '90%',
    alignItems: 'center',
  },
  header: {
    fontWeight: 'bold',
    fontSize: 23,
  },
  notifications: {
    flex: 1,
    padding: 20,
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 50,
  },
  imageWrapper: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 10,
    marginBottom: 10,
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
  },
  medTime: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#71099e',
  },
  mainWrapper: {
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  medicWrapper: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  apptWrapper: {
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
    time: moment().format('ddd hh:mm a'),
    notes: 'Fasting visit',
  },
};

export default withUsers(Home);
