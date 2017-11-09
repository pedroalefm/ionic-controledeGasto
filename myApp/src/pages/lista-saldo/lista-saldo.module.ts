import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaSaldoPage } from './lista-saldo';

@NgModule({
  declarations: [
    ListaSaldoPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaSaldoPage),
  ],
})
export class ListaSaldoPageModule {}
