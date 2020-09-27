import { SignInRequest } from './../../../domain/vo/request/sign-in';
import { SignInUseCase } from '../../../domain/usecases/sign-in-usecase';
import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private signInUseCase: SignInUseCase,
  ) {
    this.createForm();
  }

  createForm(): void {
    this.formGroup = this.formBuilder.group({
      email: ['', [Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(10)]],
    });
  }

  onSubmit(): void {
    const request: SignInRequest = this.formGroup.value;
    this.signInUseCase.execute(request).subscribe(() => {
      this.router.navigateByUrl('/orders');
    });
  }
}
