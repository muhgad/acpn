import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Library2019Component } from './library2019.component';

describe('Library2019Component', () => {
  let component: Library2019Component;
  let fixture: ComponentFixture<Library2019Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Library2019Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Library2019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
