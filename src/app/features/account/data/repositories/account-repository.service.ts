import { Injectable } from '@angular/core';
import { SignUpRequest, SignInRequest } from '../../domain/vo/request';
import { Observable } from 'rxjs';
import { User } from '../../domain/entities/user';
import { RemoteDataSource } from '../datasources/remote-data-source.service';
import { AccountRepository } from '../../domain/repositories/account-repository';

@Injectable()
export class AccountRepositoryService implements AccountRepository {
  constructor(private remoteDataSource: RemoteDataSource) {}

  signUp(params: SignUpRequest): Observable<User> {
    return this.remoteDataSource.signUp(params);
  }
  signIn(params: SignInRequest): Observable<User> {
    return this.remoteDataSource.signIn(params);
  }
  logOut(): Observable<boolean> {
    return this.remoteDataSource.logOut();
  }
}
