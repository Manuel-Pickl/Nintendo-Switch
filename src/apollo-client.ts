import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
//   uri: 'your/graphql/endpoint',
  cache: new InMemoryCache(),
});
