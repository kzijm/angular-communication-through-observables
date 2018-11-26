import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { MessageService } from './../message.service';

@Component({
  selector: 'app-receive-communication',
  templateUrl: './receive-communication.component.html',
})

export class RecieveCommunicationComponent implements OnDestroy {
  message: any;
  subscription: Subscription;

  constructor(private messageService: MessageService) {
      // subscribe to home component messages
      this.subscription = this.messageService.getMessage().subscribe(message => { this.message = message; });
  }

  ngOnDestroy() {
      console.log('destroying');
      // unsubscribe to ensure no memory leaks
      this.subscription.unsubscribe();
  }
}
