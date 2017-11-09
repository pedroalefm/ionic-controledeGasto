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
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import {CarteiraPage} from "../carteira/carteira";
import {ListaSaldoPage} from '../lista-saldo/lista-saldo';


@IonicPage()
@Component({
  selector: 'page-adicionar-receita',
  templateUrl: 'adicionar-receita.html',
})
export class AdicionarReceitaPage {

  private saldoForm: FormGroup;

  valor:string;
  usuario: Observable<any[]>; 
  email:any;
  saldo: AngularFireObject<any>;
  despesas: Observable<any[]>; 
  saldos: Observable<any[]>; 
  
  
  private SaldoBando: String;

  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth, private database : AngularFireDatabase, public user: UserService, public fb: FormBuilder, ) {
    this.saldoForm = fb.group({
      'categoria': ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      'sobre': ['', [Validators.required, Validators.min(1)]],
      'valor': ['', [Validators.required, Validators.min(1)]],
      'data' : ['', [Validators.required, Validators.min(1)]]
    });
    this.afAuth.authState.subscribe(data => {
      var userID;
      userID = data.uid;
      console.log("IDPORRA"+userID)
      this.saldos = this.database.list("users/" + userID + "/saldos").valueChanges();
                
    });

  }
  form_submit() {
    console.log(this.saldoForm.value.nome);
    this.afAuth.authState.subscribe(data => {
      this.database.list("users/" + data.uid + "/saldos").push({
          valor: this.saldoForm.value.valor,
          categoria: this.saldoForm.value.categoria,
          sobre: this.saldoForm.value.sobre,
          data: this.saldoForm.value.data
          }).then((t: any) => console.log('dados gravados: '+ t.key)), (e: any) => console.log(e.message);
          this.saldoForm.reset();

      });

  }

  adicionarReceita(){
    this.afAuth.authState.subscribe(data => {
      var userID;
      userID = data.uid;
      this.saldos = this.database.list("users/" + userID + "/saldos").valueChanges();
      
      this.saldos.subscribe(data => {
        var soma = 0.0;
        
        data.forEach(saldos => {
          soma = soma + parseFloat(saldos.valor);
          this.database.object("users/" + userID).update({
            somatorioSaldo : soma
          });
  
        });
      });          
    });
    this.navCtrl.setRoot(ListaSaldoPage).catch((e)=>{
      console.log("erro do chart");
    });
    
  }
  
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad AdicionarReceitaPage');
  }

}
