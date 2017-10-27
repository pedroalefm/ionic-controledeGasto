import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams , ToastController} from 'ionic-angular';
import { AngularFireDatabase, AngularFireAction, AngularFireObject } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';
import {AdicionarReceitaPage} from '../adicionar-receita/adicionar-receita';
import { FormsModule, NgForm } from '@angular/forms';
import {UserService} from '../../providers/usuario/user-service';


@IonicPage()
@Component({
  selector: 'page-carteira',
  templateUrl: 'carteira.html',
})
export class CarteiraPage {

  usuario: Observable<any[]>; 
  email:any;
  saldo:any;
  
  constructor( public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth, database : AngularFireDatabase, private toast: ToastController, public user: UserService) {

    this.afAuth.authState.subscribe(data => {
      if (data && data.email && data.uid) {
        this.email = data.email;
        //this.usuario = database.list ('users', ref => ref.orderByChild('email').equalTo(this.email) ).valueChanges();  
        this.usuario = database.object('users/' + data.uid).valueChanges();


      }
    });
    
  }
  


  adcionarSaldo(saldo:string){
    this.user.setSaldo(saldo);
    this.navCtrl.push(AdicionarReceitaPage);
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad CarteiraPage');
  }

}
