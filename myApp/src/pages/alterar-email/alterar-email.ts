import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { FormsModule, NgForm } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-alterar-email',
  templateUrl: 'alterar-email.html',
})
export class AlterarEmailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private afAuth: AngularFireAuth, public toastCtrl: ToastController, private database: AngularFireDatabase) {
  }



  presentToast( msg:string ) {
    let toast = this.toastCtrl.create({
      message: msg ,
      duration: 1000
    });
    toast.present();
  }

  form_alteraSenha(f: NgForm) {
    if (!f.valid) {
      return;
    }this.alterarEmail(f.controls.email.value);
  }


  alterarEmail( novoEmail: string){
    
                this.afAuth.auth.currentUser.updateEmail(novoEmail).then( ok => {
                  var userId =  this.afAuth.auth.currentUser.uid;
                  this.database.object('users/' + userId).update({
                    email: novoEmail
                  });
                  this.presentToast('E-mail atualizado! ');
                }).catch((e)=>{
                  this.presentToast("E-mail incorreto ou em uso");
                });
    
    
        }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlterarEmailPage');
  }

}
