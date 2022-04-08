import { Field, ID, ObjectType } from '@nestjs/graphql';
import Purchase from './purchases';

@ObjectType()
export default class Customer {
  @Field(() => ID)
  id: string;

  @Field(() => [Purchase])
  purchases: Purchase[];
}
