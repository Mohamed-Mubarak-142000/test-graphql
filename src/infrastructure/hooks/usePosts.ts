import { useQuery } from "@tanstack/react-query";
import { container } from "@/infrastructure/di/posts";
import { TYPES } from "@/infrastructure/di/types";
import { PostRepository } from "@/adapters/gateways/PostRepository";
import { PageQueryOptions } from "@/gql/graphql";

export const usePostsQueries = () => {
  const PostRepository = container.get<PostRepository>(TYPES.PostRepository);

  const useGetAllPosts = (options: PageQueryOptions) =>
    useQuery({
      queryKey: ["posts", JSON.stringify(options)],
      queryFn: () => PostRepository.getPosts(options),
    });

  return {
    useGetAllPosts,
  };
};
