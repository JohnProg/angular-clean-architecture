import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usecase } from 'src/app/core/usecases/usecase';
import { AccountRepository } from '../repositories/account.repository';

@Injectable({
  providedIn: 'root',
})
export class LogOutUseCase implements Usecase<boolean, void> {
  constructor(private repository: AccountRepository) {}

  execute(): Observable<boolean> {
    return this.repository.logOut();
  }
}
