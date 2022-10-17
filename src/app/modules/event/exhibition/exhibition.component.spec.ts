import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExhibitionComponent } from './exhibition.component';

describe('ExhibitionComponent', () => {
  let component: ExhibitionComponent;
  let fixture: ComponentFixture<ExhibitionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExhibitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhibitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
