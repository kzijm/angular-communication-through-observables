import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendCommunicationComponent } from './send-communication.component';

describe('SendCommunicationComponent', () => {
  let component: SendCommunicationComponent;
  let fixture: ComponentFixture<SendCommunicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendCommunicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendCommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
