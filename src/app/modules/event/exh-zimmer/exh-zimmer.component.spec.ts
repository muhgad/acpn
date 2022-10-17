import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhZimmerComponent } from './exh-zimmer.component';

describe('ExhZimmerComponent', () => {
  let component: ExhZimmerComponent;
  let fixture: ComponentFixture<ExhZimmerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExhZimmerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhZimmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
