import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecieveCommunicationComponent } from './receive-communication/receive-communication.component';
import { ModalCommunicationComponent } from './modal-communication/modal-communication.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'receive-communication', component: RecieveCommunicationComponent },
  { path: 'modal-communication', component: ModalCommunicationComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
