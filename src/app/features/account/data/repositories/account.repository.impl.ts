import { Injectable } from '@angular/core';
import { SignUpRequest, SignInRequest } from '../../domain/vo/request';
import { Observable } from 'rxjs';
import { User } from '../../domain/entities/user';
import { AccountRemoteDataSource } from '../datasources/account-remote.data-source.service';
import { AccountRepository } from '../../domain/repositories/account.repository';

@Injectable()
export class AccountRepositoryImpl implements AccountRepository {
  constructor(private remoteDataSource: AccountRemoteDataSource) {}

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
