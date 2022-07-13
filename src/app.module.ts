import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Controller, Get, Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PostsModule } from './post/posts.module';

@Controller()
export class AppController {
  @Get()
  getPosts() {
    return {
      msg: 'Api runnnig.',
    };
  }
}

@Module({
  imports: [MikroOrmModule.forRoot(), AuthModule, PostsModule],
  controllers: [AppController],
})
export class AppModule {}
