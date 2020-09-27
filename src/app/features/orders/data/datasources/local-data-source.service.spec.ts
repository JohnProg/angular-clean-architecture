import { TestBed } from '@angular/core/testing';

import { LocalDataSourceService } from './local-data-source.service';

describe('LocalDataSourceService', () => {
  let service: LocalDataSourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalDataSourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
