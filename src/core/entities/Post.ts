import { Post } from "@/gql/graphql";

import { IsNotEmpty, IsNumber, IsString, validateSync } from "class-validator";
import { plainToClass, Expose, Transform } from "class-transformer";

export class PostDTO {
  @Expose({ name: "title" })
  @Transform(({ value }) => value?.toLowerCase())
  @IsNotEmpty()
  countryName!: string;

  @IsNumber()
  @IsNotEmpty()
  id!: number;

  @IsString()
  @IsNotEmpty()
  title!: string;

  @IsString()
  @IsNotEmpty()
  body!: string;
}

export function validateAndTransformCountries(posts: Post[]): PostDTO[] {
  console.log("ddddd", posts);

  return posts?.map((post) => {
    const postDTO = plainToClass(PostDTO, post);

    const errors = validateSync(postDTO, {
      whitelist: true,
      forbidNonWhitelisted: true,
    });

    if (errors.length > 0) {
      throw new Error(
        `Validation failed: ${errors
          .map((err) => JSON.stringify(err.constraints))
          .join(", ")}`
      );
    }

    return postDTO;
  });
}
