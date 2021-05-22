import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api-ca-central-1.graphcms.com/v2/ckok36x2h7cjt01xu3jmk8r7j/master',
  cache: new InMemoryCache(),
});

export default client;
