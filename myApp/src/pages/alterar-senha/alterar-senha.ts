import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { FormsModule, NgForm } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-alterar-senha',
  templateUrl: 'alterar-senha.html',
})
export class AlterarSenhaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private afAuth: AngularFireAuth, public toastCtrl: ToastController, private database: AngularFireDatabase) {
  }

  presentToast( msg : string) {
    let toast = this.toastCtrl.create({
    message: msg,
    duration: 1000
    });
    toast.present();
  }

  form_alteraSenha(f: NgForm) {
    if (!f.valid) {
      return;
    }this.alterarSenha(f.controls.novaSenha.value, f.controls.novaSenha2.value);
  }

 
  

  alterarSenha( novaSenha: string, novaSenha2: string){
    
          if(novaSenha === novaSenha2){
            if(novaSenha.length > 5) {
                this.afAuth.auth.currentUser.updatePassword(novaSenha).then( ok => {
                  this.presentToast('Senha atualizada com sucesso! ');
                });
    
            }else if (novaSenha.length < 6){
              this.presentToast(' A senha precisa ter no mínimo 6 dígitos ')
            }
    
          } else if (novaSenha != novaSenha2) {
            this.presentToast('As senhas não são iguais')
          }else{
            this.presentToast('Houve erro no cadastro da nova senha')
            
          }
    
        }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlterarSenhaPage');
  }

}
