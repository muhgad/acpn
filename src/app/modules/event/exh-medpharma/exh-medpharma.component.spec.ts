import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhMedpharmaComponent } from './exh-medpharma.component';

describe('ExhMedpharmaComponent', () => {
  let component: ExhMedpharmaComponent;
  let fixture: ComponentFixture<ExhMedpharmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExhMedpharmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhMedpharmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
