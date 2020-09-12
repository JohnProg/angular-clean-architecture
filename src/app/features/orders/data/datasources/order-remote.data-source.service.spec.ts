import { TestBed } from '@angular/core/testing';

import { OrderRemoteDataSource } from './order-remote.data-source.service';

describe('OrderRemoteDataSource', () => {
  let service: OrderRemoteDataSource;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderRemoteDataSource);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
