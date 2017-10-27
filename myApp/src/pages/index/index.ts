import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import {HomePage} from '../home/home'
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { MenuController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-index',
  templateUrl: 'index.html',
})
export class IndexPage {
  moedas: Observable<any[]>; 
 

  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth, database : AngularFireDatabase, public menuCtrl: MenuController) {
    this.moedas = database.list('moedas').valueChanges();
    this.menuCtrl.enable(true);
    
  }
  openMenu() {
    this.menuCtrl.open();
  }
 

  ionViewDidLoad() {
    console.log('ionViewDidLoad IndexPage');
  }

 
  logout(){
    this.afAuth.auth.signOut();
    this.navCtrl.popToRoot();
  }
  
  

}
