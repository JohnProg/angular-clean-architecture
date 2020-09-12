import { TestBed } from '@angular/core/testing';

import { AccountRemoteDataSource } from './account-remote.data-source.service';

describe('AccountRemoteDataSource', () => {
  let service: AccountRemoteDataSource;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountRemoteDataSource);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
