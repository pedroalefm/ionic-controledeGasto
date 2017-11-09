import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InfoDespesaPage } from './info-despesa';

@NgModule({
  declarations: [
    InfoDespesaPage,
  ],
  imports: [
    IonicPageModule.forChild(InfoDespesaPage),
  ],
})
export class InfoDespesaPageModule {}
