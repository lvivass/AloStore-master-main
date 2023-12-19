import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatePasswordComponent } from './validate-password.component';

describe('ValidatePasswordComponent', () => {
  let component: ValidatePasswordComponent;
  let fixture: ComponentFixture<ValidatePasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValidatePasswordComponent]
    });
    fixture = TestBed.createComponent(ValidatePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
