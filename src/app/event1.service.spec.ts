import { TestBed } from '@angular/core/testing';

import { Event1Service } from './event1.service';

describe('Event1Service', () => {
  let service: Event1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Event1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
