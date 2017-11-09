import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UserService} from '../../providers/usuario/user-service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import {InfoSaldoPage} from '../info-saldo/info-saldo';
import { ChartModule } from 'angular2-highcharts';
import * as Highcharts from 'highcharts';
import firebase from 'firebase';
import {AdicionarReceitaPage} from '../adicionar-receita/adicionar-receita';

@IonicPage()
@Component({
  selector: 'page-lista-saldo',
  templateUrl: 'lista-saldo.html',
})
export class ListaSaldoPage {

  saldos: Observable<any[]>; 
  usuario: Observable<any[]>; 
  arrData = [];
  userid: any;
  public saldosRef:firebase.database.Reference;
  public saldosList:Array<any>;
  public loadedSaldosList:Array<any>;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth,private database : AngularFireDatabase,  public user: UserService) {
    this.afAuth.authState.subscribe(data => {
      this.userid = data.uid;
      this.saldos = this.database.list("users/" + data.uid + "/saldos").valueChanges();
      this.usuario = database.object('users/' + data.uid).valueChanges();


      /////////////////////
      this.saldosRef = firebase.database().ref('users/' + data.uid + "/saldos");
      this.saldosRef.on('value', despesasList => {
        let sal = [];
        despesasList.forEach( saldos => {
          sal.push(saldos.val());
          return false;
        });
  
        this.saldosList = sal;
        this.loadedSaldosList = sal;
      });
      ////////////////
      
                
    });
    
    

  }


  ////////searchbar
  initializeItems(){
    this.saldosList = this.loadedSaldosList;
  }
  getItems(searchbar) {
    // Reset items back to all of the items
    this.initializeItems();
    
    // set q to the value of the searchbar
    var q = searchbar.srcElement.value;


    // if the value is an empty string don't filter the items
    if (!q) {
      return;
    }

    this.saldosList = this.saldosList.filter((v) => {
      if(v.categoria && q) {
        if (v.categoria.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });

    console.log(q, this.saldosList.length);
    console.log(this.saldosList)

  }
  /////////
  adcionarSaldo(){
    //this.user.setSaldo(saldo);
    this.navCtrl.push(AdicionarReceitaPage);
  }


  infoSaldo(categoria: string, valor:string, sobre:string, data:string){
    this.user.setSaldo(categoria, valor, sobre, data);
    this.navCtrl.push(InfoSaldoPage);
  }


  //DELETAR NOVO Sliding
  deleteItem(sobre: string, valor: string, categoria: string){
    var refItem = this.database.list("users/" + this.userid + "/saldos");
    refItem.snapshotChanges([])
      .subscribe( filhos => {
        filhos.forEach( filho => {
          if(filho.payload.val().sobre === sobre && filho.payload.val().valor == valor && filho.payload.val().categoria == categoria ){
            var itensRef = this.database.list("users/" + this.userid +  "/saldos/" +  filho.key);
            itensRef.remove();
          }
        });
      });
      this.iniciarChart(null,null, null, null, null, null, null, null);
      

  }

  ionViewDidLoad() {
    this.afAuth.authState.subscribe(data => {
      var userID;
      userID = data.uid;
      this.saldos = this.database.list("users/" + userID + "/saldos").valueChanges();
      
      this.saldos.subscribe(data => {
        var soma = 0.0;
        var somaAluguel = null;
        var somaPensao = null;
        var somaOutros = null;
        var somaExtra = null;
        var somaSal = null;
        var somaPessoal = null;
        var somaMesada = null;
        var somaPoupanca = null;
        //Se tiver vazio ele zera
        if(!data || !data.length){
          this.database.object("users/" + userID).update({
            somatorioSaldo : 0
          });
        }

        //colocando o somatório
        data.forEach(saldos => {

          if(saldos.categoria === "Aluguel"){
            somaAluguel = somaAluguel + parseFloat(saldos.valor);
          }else if ( saldos.categoria === "Hora extra"){
            somaExtra = somaExtra + parseFloat(saldos.valor);
          }else if ( saldos.categoria === "Salário"){
            somaSal = somaSal + parseFloat(saldos.valor);
          }else if ( saldos.categoria === "Rendimentos pessoais"){
            somaPessoal = somaPessoal + parseFloat(saldos.valor);
          }else if ( saldos.categoria === "Pensão"){
            somaPensao = somaPensao + parseFloat(saldos.valor);
          }else if ( saldos.categoria === "Mesada"){
            somaMesada = somaMesada + parseFloat(saldos.valor);
          }else if ( saldos.categoria === "Poupança"){
            somaPoupanca = somaPoupanca + parseFloat(saldos.valor);
          }else if ( saldos.categoria === "Outros"){
            somaOutros = somaOutros + parseFloat(saldos.valor);
          }





          this.iniciarChart(somaExtra,somaSal, somaPessoal, somaPensao, somaMesada, somaPoupanca, somaAluguel, somaOutros);
          soma = soma + parseFloat(saldos.valor);
          this.database.object("users/" + userID).update({
            somatorioSaldo : soma
          });
  
        });
      });          
    });
  }

  iniciarChart(extra, salario, pessoal, pensao, mesada, poupanca, aluguel,outros){
    var myChart = Highcharts.chart('container2', {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
          text: '<b>Gráfico de receitas<b>'
      },
      tooltip: {
        //pointFormat: ' <b><br>{point.percentage:.1f}%</b>'
       },
       plotOptions: {
        pie: {
          
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
            }
        }
      },
      series: [{
          name: 'R$',
          data: [{
            name: 'Hora extra',
            y: extra,

          },{
            name: 'Salário',
            y: salario
          },
          {
            name: 'Rendimento Pessoal',
            y: pessoal
          },{
            name: 'Pensão',
            y: pensao
          },{
            name: 'Mesada',
            y: mesada
          },{
            name: 'Poupança',
            y: poupanca
          },{
            name: 'Alugueis',
            y: aluguel
          },{
            name: 'Outros',
            y: outros
          }]
      }]
    });

  }















}
