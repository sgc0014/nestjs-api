import { MikroOrmModuleOptions as Options } from '@mikro-orm/nestjs';
import { LoadStrategy } from '@mikro-orm/core';
const config: Options = {
  type: 'postgresql',
  host: '172.21.0.2',
  port: 5432,
  user: 'admin',
  password: 'admin',
  dbName: 'postgres',
  entities: ['dist/**/*.entity.js'],
  entitiesTs: ['src/**/*.entity.ts'],
  debug: true,
  loadStrategy: LoadStrategy.JOINED,
  registerRequestContext: false,
  autoLoadEntities: true,
};

export default config;
