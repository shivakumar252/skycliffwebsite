import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengdataComponent } from './primengdata.component';

describe('PrimengdataComponent', () => {
  let component: PrimengdataComponent;
  let fixture: ComponentFixture<PrimengdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimengdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimengdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
