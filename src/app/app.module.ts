import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SendCommunicationComponent } from './send-communication/send-communication.component';
import { RecieveCommunicationComponent } from './receive-communication/receive-communication.component';
import { MessageService } from './message.service';
import { ModalService } from './modal/modal.service';
import { ModalComponent } from './modal/modal.component';

import { ModalCommunicationComponent } from './modal-communication/modal-communication.component';
import { ModalReceiveComponent } from './modal-receive/modal-receive.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    SendCommunicationComponent,
    RecieveCommunicationComponent,
    ModalCommunicationComponent,
    ModalComponent,
    ModalReceiveComponent,
  ],
  providers: [
    MessageService,
    ModalService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
