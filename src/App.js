/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Home, Login} from './screens';
// TODO: figure out if user is logged in
const isUserLoggedIn = false;

const App = (props) => {
  return isUserLoggedIn ? <Home {...props} /> : <Login {...props} />;
};

export default App;
