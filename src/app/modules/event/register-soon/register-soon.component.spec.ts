import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSoonComponent } from './register-soon.component';

describe('RegisterSoonComponent', () => {
  let component: RegisterSoonComponent;
  let fixture: ComponentFixture<RegisterSoonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterSoonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterSoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
