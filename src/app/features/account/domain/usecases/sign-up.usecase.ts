import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usecase } from 'src/app/core/usecases/usecase';
import { User } from '../entities/user';
import { SignUpRequest } from '../vo/request/sign-up';
import { AccountRepository } from '../repositories/account.repository';

@Injectable({
  providedIn: 'root',
})
export class SignUpUseCase implements Usecase<User, SignUpRequest> {
  constructor(private repository: AccountRepository) {}
  execute(params: SignUpRequest): Observable<User> {
    return this.repository.signUp(params);
  }
}
