import { Observable } from 'rxjs';
import { Order } from '../entities/order';

export abstract class OrderDetailRepository {
  abstract fetchOrder(id: number): Observable<Order>;
}
