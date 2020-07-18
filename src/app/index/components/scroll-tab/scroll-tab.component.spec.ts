import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollTabComponent } from './scroll-tab.component';

describe('ScrollTabComponent', () => {
  let component: ScrollTabComponent;
  let fixture: ComponentFixture<ScrollTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
