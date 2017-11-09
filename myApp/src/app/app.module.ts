import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, IonicPageModule} from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { FormsModule, NgForm } from '@angular/forms';
import {CadastroPage} from '../pages/cadastro/cadastro';
import { GooglePlus } from '@ionic-native/google-plus';
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import {Camera} from "@ionic-native/camera"

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
import {AdicionarDespesaPage} from '../pages/adicionar-despesa/adicionar-despesa';
import {InfoDespesaPage} from '../pages/info-despesa/info-despesa';
import {ListaSaldoPage} from '../pages/lista-saldo/lista-saldo';
import {InfoSaldoPage} from '../pages/info-saldo/info-saldo';
import {OpcoespagePage} from "../pages/opcoespage/opcoespage";

import {AlterarEmailPage} from "../pages/alterar-email/alterar-email"
import {AlterarFotoPage} from "../pages/alterar-foto/alterar-foto"
import {AlterarSenhaPage} from "../pages/alterar-senha/alterar-senha"
import {SobrePage} from "../pages/sobre/sobre";
import { ChartModule } from 'angular2-highcharts';
import * as Highcharts from 'highcharts';




 export var config = {
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
    AdicionarReceitaPage,
    AdicionarDespesaPage,
    InfoDespesaPage,
    ListaSaldoPage,
    InfoSaldoPage,
    OpcoespagePage,
    AlterarEmailPage,
    AlterarFotoPage,
    AlterarSenhaPage,
    SobrePage
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    IonicModule.forRoot(MyApp),
    ChartModule.forRoot('Highcharts')
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CadastroPage,
    TabPage,
    AdicionarReceitaPage,
    AdicionarDespesaPage,
    InfoDespesaPage,
    ListaSaldoPage,
    InfoSaldoPage,
    OpcoespagePage,
    AlterarEmailPage,
    AlterarFotoPage,
    AlterarSenhaPage,
    SobrePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    AngularFireAuth,
    GooglePlus,
    GooglePlus!,
    UserService,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
