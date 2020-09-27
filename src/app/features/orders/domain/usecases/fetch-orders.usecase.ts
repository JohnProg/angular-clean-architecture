import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usecase } from 'src/app/core/usecases/usecase';
import { OrderRepository } from '../repositories/order.repository';
import { Order } from '../entities/order';

@Injectable()
export class FetchOrdersUseCase implements Usecase<Order[], void> {
  constructor(private repository: OrderRepository) {}

  execute(): Observable<Order[]> {
    return this.repository.fetchOrders();
  }
}
