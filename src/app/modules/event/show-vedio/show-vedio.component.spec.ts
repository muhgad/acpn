import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowVedioComponent } from './show-vedio.component';

describe('ShowVedioComponent', () => {
  let component: ShowVedioComponent;
  let fixture: ComponentFixture<ShowVedioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowVedioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowVedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
