import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Library2016Component } from './library2016.component';

describe('Library2016Component', () => {
  let component: Library2016Component;
  let fixture: ComponentFixture<Library2016Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Library2016Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Library2016Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
