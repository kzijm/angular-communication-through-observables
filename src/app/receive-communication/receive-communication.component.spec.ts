import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecieveCommunicationComponent } from './receive-communication.component';

describe('RecieveCommunicationComponent', () => {
  let component: RecieveCommunicationComponent;
  let fixture: ComponentFixture<RecieveCommunicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecieveCommunicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecieveCommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
