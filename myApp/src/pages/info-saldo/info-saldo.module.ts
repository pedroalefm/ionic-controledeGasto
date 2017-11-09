import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InfoSaldoPage } from './info-saldo';

@NgModule({
  declarations: [
    InfoSaldoPage,
  ],
  imports: [
    IonicPageModule.forChild(InfoSaldoPage),
  ],
})
export class InfoSaldoPageModule {}
