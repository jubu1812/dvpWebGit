import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerordnungenComponent } from './verordnungen.component';

describe('VerordnungenComponent', () => {
  let component: VerordnungenComponent;
  let fixture: ComponentFixture<VerordnungenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerordnungenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerordnungenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
