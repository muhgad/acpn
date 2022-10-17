import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Library2018Component } from './library2018.component';

describe('Library2018Component', () => {
  let component: Library2018Component;
  let fixture: ComponentFixture<Library2018Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Library2018Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Library2018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
