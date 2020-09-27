import { LogOutUseCase } from './usecases/log-out.usecase';
import { NgModule } from '@angular/core';
import { SignInUseCase } from './usecases/sign-in.usecase';
import { SignUpUseCase } from './usecases/sign-up.usecase';
import { DataModule } from '../data/data.module';

@NgModule({
  imports: [DataModule],
  providers: [SignInUseCase, SignUpUseCase, LogOutUseCase],
})
export class DomainModule {}
