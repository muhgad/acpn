import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhSmithComponent } from './exh-smith.component';

describe('ExhSmithComponent', () => {
  let component: ExhSmithComponent;
  let fixture: ComponentFixture<ExhSmithComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExhSmithComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhSmithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
