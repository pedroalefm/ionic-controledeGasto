import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , App} from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import {HomePage} from "../home/home";
import {TabPage} from "../tab/tab";
import {OpcoespagePage} from "../opcoespage/opcoespage";
import {Camera, CameraOptions} from "@ionic-native/camera"
import {config } from '../../app/app.module';
import {storage, initializeApp} from 'firebase';
import { ActionSheetController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {
  usuario: Observable<any[]>; 
  userID:any;
  photo = null;

  constructor(private camera: Camera,public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth, private database : AngularFireDatabase, private app: App, public actionSheetCtrl: ActionSheetController ) {
    this.afAuth.authState.subscribe(data => {
      this.userID = data.uid;
      //const picture = storage().ref('profile/' + this.userID);    
      //this.photo = picture.getDownloadURL();
      if (data && data.email && data.uid) {
        this.usuario = database.object("users/" + data.uid).valueChanges();
        
      }
    });
       
  }

  escolhaFoto() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Escolha a ação',
      buttons: [
        {
          text: 'Câmera',
          role: 'camera',
          handler: () => {
            this.takePhotoWithCamera()
          }
        },{
          text: 'Album',
          role: 'album',
          handler: () => {
            this.takePhotoWithAlbum()
          }
        }
      ]
    });
    actionSheet.present();
  }

  

  
  opcao(){
    this.navCtrl.push(OpcoespagePage);
  }
  mudarImg(){
    console.log("clicou na imagem")
  }

  async takePhotoWithCamera(){
    try{
    

     const option: CameraOptions = {
       quality: 50,
       targetHeight: 600,
       targetWidth:600,
       destinationType: this.camera.DestinationType.DATA_URL,
       encodingType: this.camera.EncodingType.JPEG,
       mediaType: this.camera.MediaType.PICTURE,
     }
     const result = await this.camera.getPicture(option);

     const image = 'data:image/jpeg;base64,' + result;

     const picture = storage().ref('profile/' + this.userID);
     picture.putString(image, 'data_url');
     this.savephotoURL();
   

   }
   
   catch(e){
     console.error(e);

   }
  }
  

  async takePhotoWithAlbum(){
    try{
    

     const option: CameraOptions = {
       quality: 50,
       targetHeight: 600,
       targetWidth:600,
       destinationType: this.camera.DestinationType.DATA_URL,
       encodingType: this.camera.EncodingType.JPEG,
       mediaType: this.camera.MediaType.PICTURE,
       sourceType: 0
     }
     const result = await this.camera.getPicture(option);

     const image = 'data:image/jpeg;base64,' + result;

     const picture = storage().ref('profile/' + this.userID);
     picture.putString(image, 'data_url');
     this.savephotoURL();
   

   }
   
   catch(e){
     console.error(e);

   }
  }

  atualizarPhoto(){
    if(this.photo != null){
      this.database.object("users/" + this.userID).update({
        //img: this.photo
      });
    }
  }
  savephotoURL(){
    storage().ref('profile/' + this.userID).getDownloadURL().then(function(url){
    console.log("the URL Image is: " + url);
    let imageURL = url
    return imageURL
  }).then((imageURL) => {
    this.database.object("users/" + this.userID).update({
      img: imageURL
    });
    });
  }

  ionViewDidLoad() {

    
    console.log('ionViewDidLoad PerfilPage');
  }

}
