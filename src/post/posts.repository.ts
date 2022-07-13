import { EntityRepository } from '@mikro-orm/postgresql';
import PostEntity from './posts.entity';

export class PostsRepository extends EntityRepository<PostEntity> {}
