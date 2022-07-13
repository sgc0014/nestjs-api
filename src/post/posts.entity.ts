import {
  Entity,
  Property,
  PrimaryKey,
  EntityRepositoryType,
} from '@mikro-orm/core';
import { PostsRepository } from './posts.repository';

@Entity({ tableName: 'posts', customRepository: () => PostsRepository })
class PostEntity {
  [EntityRepositoryType]: PostsRepository;
  @PrimaryKey()
  id: number;

  @Property()
  title: string;

  @Property()
  content: string;
}

export default PostEntity;
