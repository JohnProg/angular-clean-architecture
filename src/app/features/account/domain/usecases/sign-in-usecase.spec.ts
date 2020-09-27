import { TestBed } from '@angular/core/testing';

import { SignInUseCase } from './sign-in-usecase';

describe('SignInUseCase', () => {
  let service: SignInUseCase;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignInUseCase);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
