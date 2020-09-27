import { Observable } from 'rxjs';
import { Order } from '../entities/order';

export abstract class OrderRepository {
  abstract fetchOrders(): Observable<Order[]>;
}
