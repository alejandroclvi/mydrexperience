/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Home,
  Login,
  Signup,
  ApptList,
  MedsList,
  ApptDetails,
  MedDetails,
  Settings,
  NewAppt,
  AddressScreen,
} from './screens';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements';
//TODO: is user logged in?
const isUserLoggedIn = false;
const Stack = createStackNavigator();
const NestedStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const HomeNestedStack = createStackNavigator();
const MedListNestedStack = createStackNavigator();
const SettingsNestedStack = createStackNavigator();

function MedListStack() {
  return (
    <MedListNestedStack.Navigator>
      <MedListNestedStack.Screen
        name="MedsList"
        component={MedsList}
        options={({}) => ({
          headerLeft: null,
        })}
      />
      <MedListNestedStack.Screen name="MedDetails" component={MedDetails} />
    </MedListNestedStack.Navigator>
  );
}

function SettingsStack() {
  return (
    <SettingsNestedStack.Navigator>
      <SettingsNestedStack.Screen
        name="Settings"
        component={Settings}
        options={({}) => ({
          headerLeft: null,
        })}
      />
    </SettingsNestedStack.Navigator>
  );
}

function HomeStack() {
  return (
    <HomeNestedStack.Navigator>
      <HomeNestedStack.Screen
        name="Home"
        component={Home}
        options={({}) => ({
          headerLeft: null,
        })}
      />
    </HomeNestedStack.Navigator>
  );
}

function AppointmentListStack() {
  return (
    <NestedStack.Navigator>
      <NestedStack.Screen
        name="ApptList"
        component={ApptList}
        options={({}) => ({
          headerLeft: null,
        })}
      />
      <NestedStack.Screen
        name="ApptDetails"
        component={ApptDetails}
        options={{headerShown: true}}
      />
      <NestedStack.Screen
        name="NewAppt"
        component={NewAppt}
        options={{headerShown: true}}
      /><NestedStack.Screen
        name="AddressScreen"
        component={AddressScreen}
        options={{headerShown: true}}
      />
    </NestedStack.Navigator>
  );
}

function HomeTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStack}
        options={{
          tabBarIcon:  () => <Icon name="home" type="feather" />
        }}
      />
      <Tab.Screen name="Appointments" component={AppointmentListStack} 
        options={{
          tabBarIcon:  () => <Icon name="calendar" type="feather" />
        }}/>
      <Tab.Screen name="Medication" component={MedListStack} 
        options={{
          tabBarIcon:  () => <Icon name="plus-square" type="feather" />
        }}/>
      <Tab.Screen name="Settings" component={SettingsStack} 
        options={{
          tabBarIcon:  () => <Icon name="settings" type="feather" />
        }}/>
    </Tab.Navigator>
  );
}

export default function App(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isUserLoggedIn ? 'Home' : 'Login'}>
        <Stack.Screen
          name="HomeTabNavigator"
          component={HomeTabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
