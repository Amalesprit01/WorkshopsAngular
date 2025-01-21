import { TestBed } from '@angular/core/testing';

import { ResidenceNewService } from './residence-new.service';

describe('ResidenceNewService', () => {
  let service: ResidenceNewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResidenceNewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
