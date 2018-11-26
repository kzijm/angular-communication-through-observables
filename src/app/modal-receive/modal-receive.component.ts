import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { ModalService } from './../modal/modal.service';
import { MessageService } from './../message.service';

@Component({
  selector: 'app-modal-receive',
  templateUrl: './modal-receive.component.html',
  styleUrls: ['./modal-receive.component.css']
})

export class ModalReceiveComponent implements  OnDestroy {

  message: any;
  subscription: Subscription;

  constructor(public modalService: ModalService, private messageService: MessageService) {}

  launchPicker() {
    console.log('launchPicker');
    this.subscription = this.messageService.getMessage().subscribe(message => {
      // receive whatt is picked
      this.message = message;
      // unsubscribe else we will receive other pickers choises
      this.subscription.unsubscribe();
    });
    this.modalService.open('pick-modal-value');
  }

  ngOnDestroy() {
    console.log('destroying');
    console.log('this.subscription', this.subscription);
    // unsubscribe to ensure no memory leaks
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
