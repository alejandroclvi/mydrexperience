/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Home, Login, Signup, ApptList, MedsList, ApptDetails} from './screens';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//TODO: is user logged in?
const isUserLoggedIn = true;
const Stack = createStackNavigator();
const NestedStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const HomeNestedStack = createStackNavigator();
const MedListNestedStack = createStackNavigator();

function MedListStack() {
  return (
    <MedListNestedStack.Navigator>
      <MedListNestedStack.Screen name="MedsList" component={MedsList} />
    </MedListNestedStack.Navigator>
  );
}

function HomeStack() {
  return (
    <HomeNestedStack.Navigator>
      <HomeNestedStack.Screen name="Home" component={Home} />
    </HomeNestedStack.Navigator>
  );
}

function AppointmentListStack() {
  return (
    <NestedStack.Navigator>
      <NestedStack.Screen name="ApptList" component={ApptList} />
      <NestedStack.Screen
        name="ApptDetails"
        component={ApptDetails}
        options={{headerShown: true}}
      />
    </NestedStack.Navigator>
  );
}

function HomeTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="ApptListStack" component={AppointmentListStack} />
      <Tab.Screen name="MedListStack" component={MedListStack} />
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
