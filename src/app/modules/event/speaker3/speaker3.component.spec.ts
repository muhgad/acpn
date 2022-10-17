import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Speaker3Component } from './speaker3.component';

describe('Speaker3Component', () => {
  let component: Speaker3Component;
  let fixture: ComponentFixture<Speaker3Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Speaker3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Speaker3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
