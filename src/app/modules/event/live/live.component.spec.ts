import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LiveComponent } from './live.component';

describe('LiveComponent', () => {
  let component: LiveTestComponent;
  let fixture: ComponentFixture<LiveTestComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [LiveComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
