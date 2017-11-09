import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {storage, initializeApp} from 'firebase';
import {FIREBASE_CONFIG } from '../../app/firebase.config'
import {Camera, CameraOptions} from "@ionic-native/camera"
import {config } from '../../app/app.module';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';


@IonicPage()
@Component({
  selector: 'page-alterar-foto',
  templateUrl: 'alterar-foto.html',
})
export class AlterarFotoPage {
  userID:any;
  
  constructor(private camera: Camera, public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth, private database : AngularFireDatabase) {
    this.afAuth.authState.subscribe(data => {
      this.userID = data.uid;
                
    });
    
    //initializeApp(config);
  }

   async takePhoto(){
     try{
      const option: CameraOptions = {
        quality: 50,
        targetHeight: 600,
        targetWidth:600,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
       

      }
      const result = await this.camera.getPicture(option);

      const image = 'data:image/jpeg;base64,' + result;

      const picture = storage().ref('profile/' + this.userID);
      picture.putString(image, 'data_url');
      
      this.database.object("users/" + this.userID).update({
        img: picture.getDownloadURL()
      });
      //this.photo = (picture.getDownloadURL())

    }
    
    catch(e){
      console.error(e);

    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlterarFotoPage');
  }

}
