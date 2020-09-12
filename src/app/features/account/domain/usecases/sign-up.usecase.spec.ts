import { TestBed } from '@angular/core/testing';

import { SignUpUseCase } from './sign-up.usecase';

describe('SignUpUseCase', () => {
  let service: SignUpUseCase;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignUpUseCase);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
