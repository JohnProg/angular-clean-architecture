import { Observable } from 'rxjs';
import { User } from '../entities/user';
import { SignUpRequest, SignInRequest } from '../vo/request';

export abstract class AccountRepository {
  abstract signUp(params: SignUpRequest): Observable<User>;
  abstract signIn(params: SignInRequest): Observable<User>;
  abstract logOut(): Observable<boolean>;
}
