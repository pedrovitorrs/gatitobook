import { TestBed } from '@angular/core/testing';

import { UsuarioExistsService } from './usuario-exists.service';

describe('UsuarioExistsService', () => {
  let service: UsuarioExistsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuarioExistsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
