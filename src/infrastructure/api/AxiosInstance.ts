// import axios from 'axios';

import { GraphQLClient } from "graphql-request";

// const endpoint = "https://countries.trevorblades.com/";
const endpoint = "https://graphqlzero.almansi.me/api";
export const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer YOUR_ACCESS_TOKEN`,
  },
});

// export const api = axios.create({
//   baseURL: 'https://jsonplaceholder.typicode.com',
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     // Handle global error cases here
//     return Promise.reject(error);
//   }
// );
