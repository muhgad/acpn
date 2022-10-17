import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Society2Component } from './society2.component';

describe('Society2Component', () => {
  let component: Society2Component;
  let fixture: ComponentFixture<Society2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Society2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Society2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
