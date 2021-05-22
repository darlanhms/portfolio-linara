import { AppProps } from 'next/app';
import React from 'react';
import { Provider } from 'urql';
import graphqlClient from '../services/graphqlClient';
import '../styles/globals.css';

const App = ({ Component, pageProps }: AppProps): React.ReactElement => (
  <Provider value={graphqlClient}>
    <Component {...pageProps} />
  </Provider>
);

export default App;
