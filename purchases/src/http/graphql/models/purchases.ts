import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';
import Product from './products';

enum PurchaseStatus {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  FAILED = 'FAILED',
}

registerEnumType(PurchaseStatus, {
  name: 'PurchaseStatus',
  description: 'Available status of the purchase',
});

@ObjectType()
export default class Purchase {
  @Field(() => ID)
  id: string;

  @Field(() => PurchaseStatus)
  status: PurchaseStatus;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Product)
  product: Product;

  productId: string;
}
