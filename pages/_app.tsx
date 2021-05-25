import { ApolloProvider } from '@apollo/client';
import { AppProps } from 'next/app';
import React from 'react';
import client from '../services/graphqlClient';
import '../styles/globals.scss';

const App = ({ Component, pageProps }: AppProps): React.ReactElement => (
  <ApolloProvider client={client}>
    <Component {...pageProps} />
  </ApolloProvider>
);

export default App;
