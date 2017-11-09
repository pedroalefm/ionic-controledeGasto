import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import {IndexPage} from '../index/index';
import {UserService} from '../../providers/usuario/user-service';
import { Observable } from 'rxjs/Observable';


@IonicPage()
@Component({
  selector: 'page-adicionar-despesa',
  templateUrl: 'adicionar-despesa.html',
})
export class AdicionarDespesaPage {
  private despesaForm: FormGroup;
  userId;
  despesas: Observable<any[]>; 

  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder, private database: AngularFireDatabase, public afAuth: AngularFireAuth, public user: UserService) {
    this.despesaForm = fb.group({
      'valor': ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      'categoria': ['', [Validators.required, Validators.min(1)]],
      'sobre': ['', [Validators.required, Validators.min(1)]],
      'data': ['', [Validators.required, Validators.min(1)]]
      
    });

    console.log("VALOR DAS DESPESAS INICIANDO A TELA"+this.user.getSomatorio());

    this.afAuth.authState.subscribe(data => {
      var userID;
      userID = data.uid;
      console.log("IDPORRA"+userID)
      this.despesas = this.database.list("users/" + userID + "/despesas").valueChanges();
                
    });
    

    
  }


  form_submit() {
        console.log(this.despesaForm.value.nome);
        this.afAuth.authState.subscribe(data => {
          this.userId = data.uid;
          
          this.database.list("users/" + data.uid + "/despesas").push({
              valor: this.despesaForm.value.valor,
              categoria: this.despesaForm.value.categoria,
              sobre: this.despesaForm.value.sobre,
              data: this.despesaForm.value.data
              }).then((t: any) => console.log('dados gravados: '+ t.key)), (e: any) => console.log(e.message);
              this.despesaForm.reset();

          });

        

    
      }
      
      adicionarDespesa(){

        if(this.user.getSomatorio() === 0){

        
        this.afAuth.authState.subscribe(data => {
          var userID;
          userID = data.uid;
          console.log("IDPORRA"+userID)
          this.despesas = this.database.list("users/" + userID + "/despesas").valueChanges();
          
          this.despesas.subscribe(data => {
            var soma = 0;
            
            data.forEach(despesas => {
              soma = soma + parseInt(despesas.valor);
              console.log("VALOR SOMA!!!!!!<<<<<<<<<<<<<<<<"+soma);
              this.database.object("users/" + userID).update({
                somatorio : soma
              });
      
            });
          });          
        });
       
      }
       this.navCtrl.setRoot(IndexPage);

        
    
        
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdicionarDespesaPage');
    this.user.reniciarSomatorio();
    console.log("somatorio ao iniciar" + this.user.getSomatorio());
  }

}
