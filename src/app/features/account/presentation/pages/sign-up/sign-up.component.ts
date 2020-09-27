import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { SignUpRequest } from './../../../domain/vo/request/sign-up';
import { SignUpUseCase } from '../../../domain/usecases/sign-up-usecase';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private signUpUseCase: SignUpUseCase) {
    this.createForm();
  }

  createForm(): void {
    this.formGroup = this.formBuilder.group({
      email: ['', [Validators.email]],
      username: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(10)]],
    });
  }

  onSubmit(): void {
    const { username, email, firstName, lastName, password } = this.formGroup.controls;
    const request: SignUpRequest = {
      username: username.value,
      email: email.value,
      firstName: firstName.value,
      lastName: lastName.value,
      password: password.value,
    };

    this.signUpUseCase.execute(request);
  }
}
