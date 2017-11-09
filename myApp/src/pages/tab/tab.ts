import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UserService} from '../../providers/usuario/user-service';
import { AngularFireDatabase, AngularFireAction, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';


@IonicPage()
@Component({
  selector: 'page-tab',
  templateUrl: 'tab.html'
})
export class TabPage {

  indexRoot = 'IndexPage'
  carteiraRoot = 'CarteiraPage'
  perfilRoot = 'PerfilPage'
  usuario: Observable<any[]>; 
  

  constructor(public navCtrl: NavController, public navParams: NavParams,private database : AngularFireDatabase, private afAuth: AngularFireAuth, public user: UserService) {  

       

    
  }




}
