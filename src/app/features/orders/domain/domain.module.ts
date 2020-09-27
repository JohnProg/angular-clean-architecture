import { FetchOrderDetailUsecaseService } from './usecases/fetch-order-detail-usecase.service';
import { DataModule } from './../data/data.module';
import { NgModule } from '@angular/core';
import { FetchOrdersUseCaseService } from './usecases/fetch-orders-usecase.service';

@NgModule({
  imports: [DataModule],
  providers: [FetchOrdersUseCaseService, FetchOrderDetailUsecaseService],
})
export class DomainModule {}
