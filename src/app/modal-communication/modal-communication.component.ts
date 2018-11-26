import { Component, OnInit } from '@angular/core';
// import { Subscription } from 'rxjs/Subscription';

// import { ModalService } from './../modal/modal.service';
// import { MessageService } from './../message.service';

@Component({
  selector: 'app-modal-communication',
  templateUrl: './modal-communication.component.html',
  styleUrls: ['./modal-communication.component.css']
})
export class ModalCommunicationComponent implements OnInit {

  constructor() {
    // subscribe to home component messages
  }

  // launchPicker() {
  //   console.log('launchPicker');
  //   this.subscription = this.messageService.getMessage().subscribe(message => {
  //     // receive whatt is picked
  //     this.message = message;
  //     // unsubscribe else we will receive other pickers choises
  //     this.subscription.unsubscribe();
  //   });
  //   this.modalService.open('pick-modal-value');
  // }

  ngOnInit() {

  }

  // ngOnDestroy() {
  //   console.log('destroying');
  //   // unsubscribe to ensure no memory leaks
  //   this.subscription.unsubscribe();
  // }

}
