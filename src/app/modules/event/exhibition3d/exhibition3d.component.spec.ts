import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exhibition3dComponent } from './exhibition3d.component';

describe('Exhibition3dComponent', () => {
  let component: Exhibition3dComponent;
  let fixture: ComponentFixture<Exhibition3dComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exhibition3dComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Exhibition3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
