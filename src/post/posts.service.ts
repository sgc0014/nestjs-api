import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/core';
import { PostsRepository } from './posts.repository';

@Injectable()
export class PostsService {
  constructor(private readonly postRepositoryuserRepository: PostsRepository) {}
  getPosts() {
    return this.postRepositoryuserRepository.findAll();
  }
}
