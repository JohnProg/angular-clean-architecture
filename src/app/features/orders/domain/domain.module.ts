import { DataModule } from './../data/data.module';
import { NgModule } from '@angular/core';
import { FetchOrdersUseCase } from './usecases/fetch-orders.usecase';

@NgModule({
  imports: [DataModule],
  providers: [FetchOrdersUseCase],
})
export class DomainModule {}
