import { OrderRepositoryImpl } from './repositories/order.repository.impl';
import { NgModule } from '@angular/core';
import {
  OrderRemoteDataSource,
  OrderRemoteDataSourceImpl,
} from './datasources/order-remote.data-source.service';
import { OrderRepository } from '../domain/repositories/order.repository';

@NgModule({
  providers: [
    { provide: OrderRemoteDataSource, useClass: OrderRemoteDataSourceImpl },
    { provide: OrderRepository, useClass: OrderRepositoryImpl },
  ],
})
export class DataModule {}
