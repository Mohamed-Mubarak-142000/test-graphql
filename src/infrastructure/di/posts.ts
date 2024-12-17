import "reflect-metadata";
import { Container } from "inversify";
import { TYPES } from "./types";
// import { UserRepository } from "../../adapters/gateways/UserRepository";
// import { UserRepositoryImpl } from "../repositories/UserRepositoryImpl";
// import { ProductRepository } from "@/adapters/gateways/ProductRepository";
// import { ProductRepositoryImpl } from "../repositories/ProductRepositoryImpl";
import { PostRepository } from "@/adapters/gateways/PostRepository";
import { PostsRepositoryImpl } from "../repositories/PostRepositoryImpl";

const container = new Container();

// Bind repositories to their implementations
// container.bind<UserRepository>(TYPES.UserRepository).to(UserRepositoryImpl);
// container.bind<ProductRepository>(TYPES.ProductRepository).to(ProductRepositoryImpl);
container.bind<PostRepository>(TYPES.PostRepository).to(PostsRepositoryImpl);

export { container };
