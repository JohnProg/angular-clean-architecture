import { OrderRepositoryImpl } from './features/orders/data/repositories/order.repository.impl';
import {
  OrderRemoteDataSourceImpl,
  OrderRemoteDataSource,
} from './features/orders/data/datasources/order-remote.data-source.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountRepository } from './features/account/domain/repositories/account.repository';
import {
  AccountRemoteDataSource,
  AccountRemoteDataSourceImpl,
} from './features/account/data/datasources/account-remote.data-source.service';
import { AccountRepositoryImpl } from './features/account/data/repositories/account.repository.impl';
import { HttpClientModule } from '@angular/common/http';
import { OrderRepository } from './features/orders/domain/repositories/order.repository';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    { provide: AccountRepository, useClass: AccountRepositoryImpl },
    { provide: AccountRemoteDataSource, useClass: AccountRemoteDataSourceImpl },
    { provide: OrderRepository, useClass: OrderRepositoryImpl },
    { provide: OrderRemoteDataSource, useClass: OrderRemoteDataSourceImpl },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
