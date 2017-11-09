import { Component,  } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { FormsModule, NgForm } from '@angular/forms';
import * as firebase from 'firebase/app';
import {CadastroPage} from '../cadastro/cadastro';
import { GooglePlus } from '@ionic-native/google-plus';
import {IndexPage} from '../index/index';
import { MenuController } from 'ionic-angular';
import {TabPage} from '../tab/tab';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private afAuth: AngularFireAuth, private googlePlus: GooglePlus, public menuCtrl: MenuController, public loadingCtrl: LoadingController) {
    this.menuCtrl.enable(false);

  }
  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      content: 'Logando...'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, 1000);
  }

  form_login(f: NgForm) {
    if (!f.valid) {
      return;
    }
    this.afAuth.auth.signInWithEmailAndPassword(f.controls.email.value, f.controls.password.value).then(ok => {
          
      this.navCtrl.push(TabPage);
    });
  }

  form_loginGoogle(g: NgForm){
    if (!g.valid) {
      return;
    }
   /* this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(ok => {
      alert("Autenticando");      
    });*/
    this.googlePlus.login({
      'webClientId': '<YL15oqItwCIOqklCgYHE7WNug>',
      'offline': true
    }).then(res => {firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken)).then(success => {
        this.navCtrl.push(TabPage);
    } )})
    
  }

  cadastro(){
    this.navCtrl.push(CadastroPage);
  }

  


}
