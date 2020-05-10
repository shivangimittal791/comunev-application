import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UppcomingEventsComponent } from './uppcoming-events.component';

describe('UppcomingEventsComponent', () => {
  let component: UppcomingEventsComponent;
  let fixture: ComponentFixture<UppcomingEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UppcomingEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UppcomingEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
