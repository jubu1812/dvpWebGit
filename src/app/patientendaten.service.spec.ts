import { TestBed, inject } from '@angular/core/testing';

import { PatientendatenService } from './patientendaten.service';

describe('PatientendatenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PatientendatenService]
    });
  });

  it('should be created', inject([PatientendatenService], (service: PatientendatenService) => {
    expect(service).toBeTruthy();
  }));
});
