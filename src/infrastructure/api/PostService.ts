import { gql } from "graphql-request";

class CountriesQueries {
  fetchCountries() {
    return gql`
      query ($options: PageQueryOptions) {
        posts(options: $options) {
          data {
            id
            title
          }
          meta {
            totalCount
          }
        }
      }
    `;
  }
}

const countryQuery = new CountriesQueries();

import { graphQLClient } from "./AxiosInstance";

import { PageQueryOptions, PostsPage } from "@/gql/graphql";

export const CountryService = {
  getAll: async (filterInput?: PageQueryOptions): Promise<PostsPage> => {
    return graphQLClient.request(countryQuery.fetchCountries(), {
      options: filterInput,
    });
  },
};
