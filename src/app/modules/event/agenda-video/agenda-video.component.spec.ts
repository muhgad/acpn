import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaVideoComponent } from './agenda-video.component';

describe('AgendaVideoComponent', () => {
  let component: AgendaVideoComponent;
  let fixture: ComponentFixture<AgendaVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendaVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
