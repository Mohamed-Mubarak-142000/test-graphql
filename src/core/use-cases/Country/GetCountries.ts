import { PostRepository } from "@/adapters/gateways/CountryRepository";

export class GetPosts {
  constructor(private postRepository: PostRepository) {}

  execute() {
    return this.postRepository.getPosts();
  }
}
