import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Speaker4Component } from './speaker4.component';

describe('Speaker4Component', () => {
  let component: Speaker4Component;
  let fixture: ComponentFixture<Speaker4Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Speaker4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Speaker4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
