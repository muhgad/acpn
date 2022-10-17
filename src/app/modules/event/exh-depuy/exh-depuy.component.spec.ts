import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhDepuyComponent } from './exh-depuy.component';

describe('ExhDepuyComponent', () => {
  let component: ExhDepuyComponent;
  let fixture: ComponentFixture<ExhDepuyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExhDepuyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhDepuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
