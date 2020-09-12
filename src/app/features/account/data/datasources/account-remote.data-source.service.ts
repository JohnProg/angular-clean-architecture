import { UserModel } from './../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export abstract class AccountRemoteDataSource {
  abstract signUp(params): Observable<UserModel>;
  abstract signIn(params): Observable<UserModel>;
  abstract logOut(): Observable<boolean>;
}

@Injectable({
  providedIn: 'root',
})
export class AccountRemoteDataSourceImpl implements AccountRemoteDataSource {
  constructor(private client: HttpClient) {}

  signUp(params: any): Observable<UserModel> {
    return this.client.post<UserModel>('<some-endpoint>', params);
  }
  signIn(params: any): Observable<UserModel> {
    return this.client.post<UserModel>('https://jsonplaceholder.typicode.com/users', params);
  }
  logOut(): Observable<boolean> {
    return this.client.get<boolean>('<some-endpoint>');
  }
}
