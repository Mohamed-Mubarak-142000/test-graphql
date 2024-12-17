import { injectable } from "inversify";
import { PostRepository } from "@/adapters/gateways/PostRepository";
import { CountryService } from "../api/PostService";
import { validateAndTransformCountries } from "@/core/entities/Post";
import { PageQueryOptions } from "@/gql/graphql";

@injectable()
export class PostsRepositoryImpl implements PostRepository {
  async getPosts(options?: PageQueryOptions) {
    return validateAndTransformCountries(
      (await CountryService.getAll(options)).data
    );
  }
}
