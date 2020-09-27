import { TestBed } from '@angular/core/testing';

import { FetchOrdersUseCaseService } from './fetch-orders-usecase.service';

describe('FetchOrdersUseCaseService', () => {
  let service: FetchOrdersUseCaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchOrdersUseCaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
