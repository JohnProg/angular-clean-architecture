import { NgModule } from '@angular/core';
import { AccountRepository } from '../domain/repositories/account-repository';
import {
  RemoteDataSource,
  RemoteDataSourceService,
} from './datasources/remote-data-source.service';
import { AccountRepositoryService } from './repositories/account-repository.service';

@NgModule({
  providers: [
    { provide: RemoteDataSource, useClass: RemoteDataSourceService },
    { provide: AccountRepository, useClass: AccountRepositoryService },
  ],
})
export class DataModule {}
