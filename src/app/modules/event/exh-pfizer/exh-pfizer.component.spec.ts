import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhPfizerComponent } from './exh-pfizer.component';

describe('ExhPfizerComponent', () => {
  let component: ExhPfizerComponent;
  let fixture: ComponentFixture<ExhPfizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExhPfizerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhPfizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
