import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdicionarReceitaPage } from './adicionar-receita';

@NgModule({
  declarations: [
    AdicionarReceitaPage,
  ],
  imports: [
    IonicPageModule.forChild(AdicionarReceitaPage),
  ],
})
export class AdicionarReceitaPageModule {}
