import { TestBed } from '@angular/core/testing';

import { ArtStyleService } from './art-style.service';

describe('ArtStyleService', () => {
  let service: ArtStyleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtStyleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
