import { TestBed } from '@angular/core/testing';

import { GetTagApiDataService } from './get-tag-api-data.service';

describe('GetTagApiDataService', () => {
  let service: GetTagApiDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetTagApiDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
