import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';
import { FormsModule, NgForm } from '@angular/forms';
import {UserService} from '../../providers/usuario/user-service';


@IonicPage()
@Component({
  selector: 'page-adicionar-receita',
  templateUrl: 'adicionar-receita.html',
})
export class AdicionarReceitaPage {


  valor:string;
  usuario: Observable<any[]>; 
  email:any;
  saldo: AngularFireObject<any>;
  
  private SaldoBando: String;

  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth, database : AngularFireDatabase, public user: UserService) {
    
    this.afAuth.authState.subscribe(data => {
      if (data && data.email && data.uid) {
        this.email = data.email;
        this.usuario = database.list ('users', ref => ref.orderByChild('email').equalTo(this.email) ).valueChanges();  
        this.saldo = database.object(data.uid);
        this.SaldoBando = this.user.getSaldo();
        alert(this.SaldoBando);

      }
    });

  }

  adicionarSaldo(){

    this.saldo.update({saldo:this.valor});
  }
  
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad AdicionarReceitaPage');
  }

}
