import { PostDTO } from "@/core/entities/Country";
import { PageQueryOptions } from "@/gql/graphql";
// import { CountryFilterInput } from "@/gql/graphql";

export interface PostRepository {
  getPosts(options?: PageQueryOptions): Promise<PostDTO[]>;
}
