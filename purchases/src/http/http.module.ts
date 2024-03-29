import { Module } from '@nestjs/common';
import { ApolloDriver } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule } from '@nestjs/config';
import path from 'node:path';
import { DatabaseModule } from '../database/database.module';
import { ProductsResolver } from './graphql/resolvers/products.resolver';
import { ProductService } from '../services/products.service';
import { PurchasesService } from '../services/purchases.services';
import { PurchasesResolver } from './graphql/resolvers/purchases.resolver';
import { CustomersService } from '../services/customers.service';
import { CustomersResolver } from './graphql/resolvers/customers.resolver';

// read process.env in this module
@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: path.resolve(process.cwd(), 'src/schema.gql'),
    }),
  ],
  providers: [
    ProductsResolver,
    ProductService,
    PurchasesResolver,
    PurchasesService,
    CustomersResolver,
    CustomersService,
  ],
})
export class HttpModule {}
