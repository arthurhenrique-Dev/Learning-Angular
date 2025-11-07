import { TestBed } from '@angular/core/testing';

import { EnviaParaOBackEnd } from './envia-para-oback-end';

describe('EnviaParaOBackEnd', () => {
  let service: EnviaParaOBackEnd;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnviaParaOBackEnd);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
