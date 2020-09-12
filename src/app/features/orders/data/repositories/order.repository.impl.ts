import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../../domain/entities/order';
import { OrderRemoteDataSource } from '../datasources/order-remote.data-source.service';
import { OrderRepository } from '../../domain/repositories/order.repository';

@Injectable({
  providedIn: 'root',
})
export class OrderRepositoryImpl implements OrderRepository {
  constructor(private remoteDataSource: OrderRemoteDataSource) {}

  fetchOrders(): Observable<Order[]> {
    return this.remoteDataSource.fetchOrders();
  }
}
