import { injectable } from "inversify";
import { PostRepository } from "@/adapters/gateways/CountryRepository";
import { CountryService } from "../api/CountryService";
import { validateAndTransformCountries } from "@/core/entities/Country";
import { PageQueryOptions } from "@/gql/graphql";

@injectable()
export class PostsRepositoryImpl implements PostRepository {
  async getPosts(options?: PageQueryOptions) {
    return validateAndTransformCountries(
      (await CountryService.getAll(options)).data.posts
    );
  }
}
