import { NgModule } from '@angular/core';
import { AccountRepository } from '../domain/repositories/account.repository';
import {
  AccountRemoteDataSource,
  AccountRemoteDataSourceImpl,
} from './datasources/account-remote.data-source.service';
import { AccountRepositoryImpl } from './repositories/account.repository.impl';

@NgModule({
  providers: [
    { provide: AccountRemoteDataSource, useClass: AccountRemoteDataSourceImpl },
    { provide: AccountRepository, useClass: AccountRepositoryImpl },
  ],
})
export class DataModule {}
