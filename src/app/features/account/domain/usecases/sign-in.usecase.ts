import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usecase } from 'src/app/core/usecases/usecase';
import { AccountRepository } from '../repositories/account.repository';
import { SignInRequest } from '../vo/request';
import { User } from '../entities/user';

@Injectable()
export class SignInUseCase implements Usecase<User, SignInRequest> {
  constructor(private repository: AccountRepository) {}

  execute(params: SignInRequest): Observable<User> {
    return this.repository.signIn(params);
  }
}
