import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProductService } from '../../../services/products.service';
import CreateProductInput from '../inputs/create-product-input';
import { AuthorizationGuard } from '../../auth/authorization.guard';
import Product from '../models/products';

@Resolver('products')
export class ProductsResolver {
  constructor(private productsService: ProductService) {}

  @Query(() => [Product])
  // @UseGuards(AuthorizationGuard)
  products() {
    return this.productsService.listAllProducts();
  }

  @Mutation(() => Product)
  @UseGuards(AuthorizationGuard)
  createProduct(@Args('data') data: CreateProductInput) {
    return this.productsService.createProduct(data);
  }
}
