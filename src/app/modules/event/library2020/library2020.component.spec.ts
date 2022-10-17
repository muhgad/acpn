import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Library2020Component } from './library2020.component';

describe('Library2020Component', () => {
  let component: Library2020Component;
  let fixture: ComponentFixture<Library2020Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Library2020Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Library2020Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
