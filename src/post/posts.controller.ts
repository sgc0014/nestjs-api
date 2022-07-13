import { Controller, Get, Post } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller()
export class PostsController {
  constructor(private postService: PostsService) {}

  @Get('posts')
  getPosts() {
    const a = this.postService.getPosts();
    console.log(a);
    return {
      msg: 'success',
    };
  }
}
