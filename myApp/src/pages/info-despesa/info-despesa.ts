import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UserService} from '../../providers/usuario/user-service';

/**
 * Generated class for the InfoDespesaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info-despesa',
  templateUrl: 'info-despesa.html',
})
export class InfoDespesaPage {
  
  public infodespesa = {
    categoria: "",
    sobre: "",
    valor: "",
    data: ""
  }
  public somatorio:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public user: UserService) {
    this.infodespesa = this.user.getDespesa();
    this.somatorio = this.user.getSomatorio();
    
  }

  ionViewDidLoad() {
    console.log(this.navParams.get('infodespesa'));
  }

}
