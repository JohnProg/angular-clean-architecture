import { UserModel } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export abstract class RemoteDataSource {
  abstract signUp(params): Observable<UserModel>;
  abstract signIn(params): Observable<UserModel>;
  abstract logOut(): Observable<boolean>;
}

@Injectable()
export class RemoteDataSourceService implements RemoteDataSource {
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
