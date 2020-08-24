/**
 * @format
 */
import 'react-native-gesture-handler'; // polyfill for react-native-navigation
import {AppRegistry} from 'react-native';
import React from 'react';
import App from './src/App';
import {name as appName} from './app.json';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';


const Client = () => {
  const client = new ApolloClient({
    link: createHttpLink({ uri: 'http://localhost:5000/graphql' }),
    cache: new InMemoryCache()
  });
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>)
}

AppRegistry.registerComponent(appName, () => Client);
