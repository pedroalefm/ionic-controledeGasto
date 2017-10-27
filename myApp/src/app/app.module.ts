import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, IonicPageModule} from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { FormsModule, NgForm } from '@angular/forms';
import {CadastroPage} from '../pages/cadastro/cadastro';
import { GooglePlus } from '@ionic-native/google-plus';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {IndexPage} from '../pages/index/index';
import {TabPage} from '../pages/tab/tab';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import {AngularFireModule} from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import {AdicionarReceitaPage} from '../pages/adicionar-receita/adicionar-receita';
import { UserService } from '../providers/usuario/user-service';




var config = {
  apiKey: "AIzaSyArEb7_OWPrCrw2fTbkhyQMGquXYUjjUD0",
  authDomain: "bepidproject.firebaseapp.com",
  databaseURL: "https://bepidproject.firebaseio.com",
  projectId: "bepidproject",
  storageBucket: "bepidproject.appspot.com",
  messagingSenderId: "443492259071"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CadastroPage,
    TabPage,
    AdicionarReceitaPage
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CadastroPage,
    TabPage,
    AdicionarReceitaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    AngularFireAuth,
    GooglePlus,
    GooglePlus!,
    UserService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
