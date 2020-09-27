import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../../domain/entities/order';
import { RemoteDataSource } from '../datasources/remote-data-source.service';
import { OrderRepository } from '../../domain/repositories/order-repository';

@Injectable()
export class OrderRepositoryService implements OrderRepository {
  constructor(private remoteDataSource: RemoteDataSource) {}

  fetchOrders(): Observable<Order[]> {
    return this.remoteDataSource.fetchOrders();
  }
}
