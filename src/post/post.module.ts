import { Module } from '@nestjs/common';
import { PostService } from './post/post.service';
import { PostController } from './post/post.controller';
import { PostController } from './post/post.controller';

@Module({
  providers: [PostService],
  controllers: [PostController]
})
export class PostModule {}
