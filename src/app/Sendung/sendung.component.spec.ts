import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendungComponent } from './sendung.component';

describe('SendungComponent', () => {
  let component: SendungComponent;
  let fixture: ComponentFixture<SendungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
