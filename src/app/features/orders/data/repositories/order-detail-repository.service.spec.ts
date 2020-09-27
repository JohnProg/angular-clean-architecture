import { TestBed } from '@angular/core/testing';

import { OrderDetailRepositoryService } from './order-detail-repository.service';

describe('OrderDetailRepositoryService', () => {
  let service: OrderDetailRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderDetailRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
