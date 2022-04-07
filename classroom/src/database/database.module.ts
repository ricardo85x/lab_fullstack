import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Module({
  providers: [PrismaService],
  exports: [PrismaService],
  // this make prisma available to all application
  // and not only the database module
})
export class DatabaseModule {}
