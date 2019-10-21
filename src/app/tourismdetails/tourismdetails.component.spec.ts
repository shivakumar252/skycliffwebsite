import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourismdetailsComponent } from './tourismdetails.component';

describe('TourismdetailsComponent', () => {
  let component: TourismdetailsComponent;
  let fixture: ComponentFixture<TourismdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourismdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourismdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
