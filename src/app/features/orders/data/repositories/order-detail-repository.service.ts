import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../../domain/entities/order';
import { OrderDetailRepository } from '../../domain/repositories/order-detail-repository';

@Injectable()
export class OrderDetailRepositoryService implements OrderDetailRepository {

  fetchOrder(id: number): Observable<Order> {
    throw new Error('Method not implemented.');
  }
}
