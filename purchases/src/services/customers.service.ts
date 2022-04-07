import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma/prisma.service';

interface CreateCustomerParams {
  authUserId: string;
}

@Injectable()
export class CustomersService {
  constructor(private prisma: PrismaService) {}

  getCustomerByAuthUserId(authUserId: string) {
    return this.prisma.customer.findUnique({
      where: {
        authUserId,
      },
    });
  }

  async createCustomer({ authUserId }: CreateCustomerParams) {
    const customerExists = await this.prisma.customer.findUnique({
      where: { authUserId },
    });

    if (customerExists) {
      throw new Error('Customer already exists');
    }

    return await this.prisma.customer.create({
      data: {
        authUserId,
      },
    });
  }
}
