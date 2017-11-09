import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import {HomePage} from "../home/home";
import {AlterarEmailPage} from "../alterar-email/alterar-email"
import {AlterarFotoPage} from "../alterar-foto/alterar-foto"
import {AlterarSenhaPage} from "../alterar-senha/alterar-senha"
import {SobrePage} from "../sobre/sobre";


@IonicPage()
@Component({
  selector: 'page-opcoespage',
  templateUrl: 'opcoespage.html',
})
export class OpcoespagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth, private app: App , private database : AngularFireDatabase) {
  }
  
  deslogar(){
    this.afAuth.auth.signOut();
  
    this.app.getRootNav().setRoot(HomePage)
  
  }

  sobre(){
    this.navCtrl.push(SobrePage);
  }
  alterarSenha(){
    this.navCtrl.push(AlterarSenhaPage);
  }
  alterarEmail(){
    this.navCtrl.push(AlterarEmailPage);
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad OpcoespagePage');
  }

}
