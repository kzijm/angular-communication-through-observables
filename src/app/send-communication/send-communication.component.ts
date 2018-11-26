import { Component } from '@angular/core';

import { MessageService } from '../message.service';
import { ModalService } from '../modal/modal.service';

@Component({
  selector: 'app-send-communication',
  templateUrl: './send-communication.component.html'
})

export class SendCommunicationComponent {

  constructor(
    private messageService: MessageService,
    public modalService: ModalService,
  ) {}

  sendMessage(): void {
    console.log('send message');
      // send message to subscribers via observable subject
      this.messageService.sendMessage('Message from send Component to receive Component!');
      console.log(this.modalService);
      this.modalService.close('pick-modal-value');
  }

  clearMessage(): void {
      // clear message
      this.messageService.clearMessage();
      console.log(this.modalService);
      this.modalService.close('pick-modal-value');
  }
}
