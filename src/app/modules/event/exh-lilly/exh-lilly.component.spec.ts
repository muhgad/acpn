import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhLillyComponent } from './exh-lilly.component';

describe('ExhLillyComponent', () => {
  let component: ExhLillyComponent;
  let fixture: ComponentFixture<ExhLillyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExhLillyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhLillyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
