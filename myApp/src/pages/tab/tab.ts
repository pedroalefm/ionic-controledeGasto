import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TabPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab',
  templateUrl: 'tab.html'
})
export class TabPage {

  indexRoot = 'IndexPage'
  carteiraRoot = 'CarteiraPage'
  perfilRoot = 'PerfilPage'


  constructor(public navCtrl: NavController, public navParams: NavParams) {  
    
  }


}
