import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CountdownnComponent } from './countdownn.component';

describe('CountdownnComponent', () => {
  let component: CountdownnComponent;
  let fixture: ComponentFixture<CountdownnComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CountdownnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
