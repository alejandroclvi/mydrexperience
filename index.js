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
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';

const errorHandler = ({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) => console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`));
  }
  if(networkError) {
    console.log(`[Network error]: ${networkError}`, networkError.statusCode);
    if(-1 !== [401, 403].indexOf(networkError.statusCode)) {
      logout().catch((err) => console.log(err));
    }
  }
};
// const client = new ApolloClient({
//   link: createHttpLink({ uri: 'http://10.0.0.115:5000/graphql' }),
//   cache: new InMemoryCache()
// });

// link: ApolloLink.from([
//   onError(errorHandler),
//   createHttpLink({ uri: 'http://10.0.0.115:5000/graphql' }),
// ]),

//ipconfig getifaddr en0
const Client = () => {
  const client = new ApolloClient({
    link: ApolloLink.from([
      onError(errorHandler),
      createHttpLink({ uri: 'http://10.0.0.115:5000/graphql' }),
    ]),
    cache: new InMemoryCache()
  });
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>)
}

AppRegistry.registerComponent(appName, () => Client);
