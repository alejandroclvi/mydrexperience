/**
 * @format
 */
import 'react-native-gesture-handler'; // polyfill for react-native-navigation
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
