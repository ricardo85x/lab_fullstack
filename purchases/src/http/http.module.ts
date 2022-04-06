import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TestController } from './test.controller';

// read process.env in this module
@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [TestController],
})
export class HttpModule {}
