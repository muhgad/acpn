import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ForgetPassComponent } from './forget-pass.component';

describe('ForgetPassComponent', () => {
  let component: ForgetPassComponent;
  let fixture: ComponentFixture<ForgetPassComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgetPassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgetPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
