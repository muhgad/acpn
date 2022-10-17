import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhAmgenComponent } from './exh-amgen.component';

describe('ExhAmgenComponent', () => {
  let component: ExhAmgenComponent;
  let fixture: ComponentFixture<ExhAmgenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExhAmgenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhAmgenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
