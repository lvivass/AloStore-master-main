import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalHomeComponent } from './modal-home.component';

describe('ModalHomeComponent', () => {
  let component: ModalHomeComponent;
  let fixture: ComponentFixture<ModalHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalHomeComponent]
    });
    fixture = TestBed.createComponent(ModalHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
