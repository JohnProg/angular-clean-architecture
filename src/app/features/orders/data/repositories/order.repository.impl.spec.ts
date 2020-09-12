import { TestBed } from '@angular/core/testing';

import { OrderRepositoryImpl } from './order.repository.impl';

describe('OrderRepositoryImpl', () => {
  let service: OrderRepositoryImpl;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderRepositoryImpl);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
