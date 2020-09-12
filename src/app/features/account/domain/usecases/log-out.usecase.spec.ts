import { TestBed } from '@angular/core/testing';

import { LogOutUseCase } from './log-out.usecase';

describe('LogOutUseCase', () => {
  let service: LogOutUseCase;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogOutUseCase);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
