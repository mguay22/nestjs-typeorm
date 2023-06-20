import { Module } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from './entities/item.entity';
import { Listing } from './entities/listing.entity';
import { Comment } from './entities/comment.entity';
import { Tag } from './entities/tag.entity';
import { ItemSubscriber } from './item.subscriber';

@Module({
  imports: [TypeOrmModule.forFeature([Item, Listing, Comment, Tag])],
  controllers: [ItemsController],
  providers: [ItemsService, ItemSubscriber],
})
export class ItemsModule {}
