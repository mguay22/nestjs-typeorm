import { Column, Entity } from 'typeorm';
import { AbstractEntity } from '../../database/abstract.entity';

@Entity()
export class Listing extends AbstractEntity<Listing> {
  @Column()
  description: string;

  @Column()
  rating: number;
}
