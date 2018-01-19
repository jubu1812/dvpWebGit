import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientenverwaltungComponent } from './patientenverwaltung.component';

describe('PatientenverwaltungComponent', () => {
  let component: PatientenverwaltungComponent;
  let fixture: ComponentFixture<PatientenverwaltungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientenverwaltungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientenverwaltungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
