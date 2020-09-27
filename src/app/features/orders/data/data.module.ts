
import { NgModule } from '@angular/core';
import {
  RemoteDataSource,
  RemoteDataSourceService,
} from './datasources/remote-data-source.service';
import { OrderRepository } from '../domain/repositories/order-repository';
import { OrderRepositoryService } from './repositories/order-repository.service';
import { OrderDetailRepository } from '../domain/repositories/order-detail-repository';
import { OrderDetailRepositoryService } from './repositories/order-detail-repository.service';

@NgModule({
  providers: [
    { provide: RemoteDataSource, useClass: RemoteDataSourceService },
    { provide: OrderRepository, useClass: OrderRepositoryService },
    { provide: OrderDetailRepository, useClass: OrderDetailRepositoryService },
  ],
})
export class DataModule {}
