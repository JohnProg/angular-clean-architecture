import { TestBed } from '@angular/core/testing';

import { FetchOrdersUseCase } from './fetch-orders.usecase';

describe('FetchOrdersUseCase', () => {
  let service: FetchOrdersUseCase;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchOrdersUseCase);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
