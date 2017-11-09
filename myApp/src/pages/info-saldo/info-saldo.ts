import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UserService} from '../../providers/usuario/user-service';

/**
 * Generated class for the InfoSaldoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info-saldo',
  templateUrl: 'info-saldo.html',
})
export class InfoSaldoPage {

  public infosaldo = {
    categoria: "",
    sobre: "",
    valor: "",
    data: ""
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public user: UserService) {
    this.infosaldo = this.user.getSaldo();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoSaldoPage');
  }

}
