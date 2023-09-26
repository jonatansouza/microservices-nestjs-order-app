import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dtos/create-order.dto';
import { OrdersRepository } from './orders.repository';

@Injectable()
export class OrdersService {
  constructor(private readonly ordersRepository: OrdersRepository) {
    
  }
  
  getOrders() {
    return this.ordersRepository.find({});
  }

  async createOrder(request: CreateOrderDto) {
    return this.ordersRepository.create(request);
  }
}
