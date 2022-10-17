import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhAmicoComponent } from './exh-amico.component';

describe('ExhAmicoComponent', () => {
  let component: ExhAmicoComponent;
  let fixture: ComponentFixture<ExhAmicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExhAmicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhAmicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
