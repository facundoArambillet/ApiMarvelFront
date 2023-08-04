import { TestBed } from '@angular/core/testing';

import { MarvelCharacterService } from './marvel-character.service';

describe('MarvelCharacterService', () => {
  let service: MarvelCharacterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarvelCharacterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
