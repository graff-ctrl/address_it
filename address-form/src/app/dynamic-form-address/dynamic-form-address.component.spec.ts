import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormAddressComponent } from './dynamic-form-address.component';

describe('DynamicFormAddressComponent', () => {
  let component: DynamicFormAddressComponent;
  let fixture: ComponentFixture<DynamicFormAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicFormAddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
