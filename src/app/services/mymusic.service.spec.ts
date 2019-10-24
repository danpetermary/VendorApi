import { TestBed } from '@angular/core/testing';

import { MymusicService } from './mymusic.service';

describe('MymusicService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MymusicService = TestBed.get(MymusicService);
    expect(service).toBeTruthy();
  });
});
