import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { DataSource } from 'typeorm';
import { Item } from './src/items/entities/item.entity';
import { Listing } from './src/items/entities/listing.entity';
import { Comment } from './src/items/entities/comment.entity';
import { Tag } from './src/items/entities/tag.entity';

config();

const configService = new ConfigService();

export default new DataSource({
  type: 'mysql',
  host: configService.getOrThrow('MYSQL_HOST'),
  port: configService.getOrThrow('MYSQL_PORT'),
  database: configService.getOrThrow('MYSQL_DATABASE'),
  username: configService.getOrThrow('MYSQL_USERNAME'),
  password: configService.getOrThrow('MYSQL_PASSWORD'),
  migrations: ['migrations/**'],
  entities: [Item, Listing, Comment, Tag],
});
