import { TestBed } from '@angular/core/testing';

import { GetMsgsService } from './get-msgs.service';

describe('GetMsgsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetMsgsService = TestBed.get(GetMsgsService);
    expect(service).toBeTruthy();
  });
});
