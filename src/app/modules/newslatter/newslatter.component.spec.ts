import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NewslatterComponent } from './newslatter.component';

describe('NewslatterComponent', () => {
  let component: NewslatterComponent;
  let fixture: ComponentFixture<NewslatterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NewslatterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewslatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
