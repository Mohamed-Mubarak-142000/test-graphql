import { useQuery } from "@tanstack/react-query";
import { container } from "@/infrastructure/di/container";
import { TYPES } from "@/infrastructure/di/types";
import { PostRepository } from "@/adapters/gateways/CountryRepository";
import { PageQueryOptions } from "@/gql/graphql";

export const useCountriesQueries = () => {
  const PostRepository = container.get<PostRepository>(TYPES.PostRepository);

  const useGetAllCountries = (options: PageQueryOptions) =>
    useQuery({
      queryKey: ["posts", JSON.stringify(options)],
      queryFn: () => PostRepository.getPosts(options),
    });

  return {
    useGetAllCountries,
  };
};
