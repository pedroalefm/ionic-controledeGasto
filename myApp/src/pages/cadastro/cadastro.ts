import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormsModule, NgForm } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import {HomePage} from '../home/home';
import { ToastController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';



/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

 
  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth, public toastCtrl: ToastController, private database: AngularFireDatabase) {
  }

  presentToast( msg:string ) {
    let toast = this.toastCtrl.create({
      message: msg ,
      duration: 1000
    });
    toast.present();
  }



  form_cadastro(f: NgForm) {
    if (!f.valid) {
      return;
    }
    if(f.controls.password.value.length < 6){
      
          this.presentToast('Senha muito curta');

    } else {
        if(f.controls.password2.value === f.controls.password.value  ){
            this.afAuth.auth.createUserWithEmailAndPassword(f.controls.email.value, f.controls.password.value).then(ok=> {
            var userId =  this.afAuth.auth.currentUser.uid;
                this.database.object('users/' + userId).set({
                nome: f.controls.nome.value,
                login: f.controls.login.value,
                email: f.controls.email.value,
                img: "",
                saldo: "",
                despesas: ""
              });

              this.presentToast('Usuário cadastrado com sucesso!');                       
              this.navCtrl.popToRoot();
            }).catch((e)=>{
              this.presentToast('Erro no cadastro. Tente novamente.');              
            });

        } else{
          this.presentToast('As senhas não são iguais');
        }
    }
  }  

  


  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }


}
