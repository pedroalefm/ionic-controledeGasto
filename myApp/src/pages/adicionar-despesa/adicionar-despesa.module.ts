import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdicionarDespesaPage } from './adicionar-despesa';

@NgModule({
  declarations: [
    AdicionarDespesaPage,
  ],
  imports: [
    IonicPageModule.forChild(AdicionarDespesaPage),
  ],
})
export class AdicionarDespesaPageModule {}
