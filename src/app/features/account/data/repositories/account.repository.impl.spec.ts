import { TestBed } from '@angular/core/testing';

import { AccountRepositoryImpl } from './account.repository.impl';

describe('AccountRepositoryImpl', () => {
  let service: AccountRepositoryImpl;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountRepositoryImpl);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
