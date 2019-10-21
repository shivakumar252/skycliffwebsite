import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SyncsidebarComponent } from './syncsidebar.component';

describe('SyncsidebarComponent', () => {
  let component: SyncsidebarComponent;
  let fixture: ComponentFixture<SyncsidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyncsidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SyncsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
