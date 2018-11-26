import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCommunicationComponent } from './modal-communication.component';

describe('ModalCommunicationComponent', () => {
  let component: ModalCommunicationComponent;
  let fixture: ComponentFixture<ModalCommunicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCommunicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
