import { PostRepository } from "@/adapters/gateways/PostRepository";
export class GetPosts {
  constructor(private postRepository: PostRepository) {}

  execute() {
    return this.postRepository.getPosts();
  }
}
