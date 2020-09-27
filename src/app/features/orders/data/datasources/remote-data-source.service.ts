import { OrderModel } from '../models/order.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export abstract class RemoteDataSource {
  abstract fetchOrders(): Observable<OrderModel[]>;
}

@Injectable()
export class RemoteDataSourceService implements RemoteDataSource {
  constructor(private client: HttpClient) {}

  fetchOrders(): Observable<OrderModel[]> {
    return this.client.get<OrderModel[]>('https://jsonplaceholder.typicode.com/users');
  }
}
