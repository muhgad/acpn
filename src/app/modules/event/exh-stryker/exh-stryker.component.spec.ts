import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhStrykerComponent } from './exh-stryker.component';

describe('ExhStrykerComponent', () => {
  let component: ExhStrykerComponent;
  let fixture: ComponentFixture<ExhStrykerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExhStrykerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhStrykerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
