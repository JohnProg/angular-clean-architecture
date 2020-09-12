import { Order } from '../../domain/entities/order';

export class OrderModel implements Order {
  id: string;
  name: string;
  address: string;

  constructor({ id, name, address }) {
    this.id = id;
    this.name = name;
    this.address = address;
  }

  username: string;
  private static fromJson(json: any) {
    return new OrderModel({
      id: json.id,
      name: json.name,
      address: json.address,
    });
  }
}
