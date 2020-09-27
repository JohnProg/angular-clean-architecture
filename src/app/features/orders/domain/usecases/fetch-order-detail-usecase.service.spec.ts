import { TestBed } from '@angular/core/testing';

import { FetchOrderDetailUsecaseService } from './fetch-order-detail-usecase.service';

describe('FetchOrderDetailUsecaseService', () => {
  let service: FetchOrderDetailUsecaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchOrderDetailUsecaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
