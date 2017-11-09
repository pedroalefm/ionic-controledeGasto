import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import {HomePage} from '../home/home'
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { MenuController } from 'ionic-angular';
import {AdicionarDespesaPage} from '../adicionar-despesa/adicionar-despesa';
import {UserService} from '../../providers/usuario/user-service';
import { DespesaService } from '../../providers/usuario/despesa-service';
import {InfoDespesaPage} from '../info-despesa/info-despesa';
import { ChartModule } from 'angular2-highcharts';
import * as Highcharts from 'highcharts';
import firebase from 'firebase';


@IonicPage()
@Component({
  selector: 'page-index',
  templateUrl: 'index.html',
})
export class IndexPage {
  despesas: Observable<any[]>; 
  despesasSum: Observable<any[]>; 
  usuario: Observable<any[]>; 
  userid: any;
  arrData = [];
  somaAluguel:any;
  public despesasRef:firebase.database.Reference;
  public despesasList:Array<any>;
  public loadedDespesasList:Array<any>;
  
  

  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth,private database : AngularFireDatabase, public menuCtrl: MenuController,  public user: UserService) {

    this.somaAluguel = this.user.getSomaAluguel();

    
    this.afAuth.authState.subscribe(data => {
        this.despesas = database.list("users/" + data.uid + "/despesas").valueChanges();
        this.userid = data.uid;

        this.usuario = database.object('users/' + data.uid).valueChanges();
        ////////Search
        this.despesasRef = firebase.database().ref('users/' + data.uid + "/despesas");
        this.despesasRef.on('value', despesasList => {
          let desp = [];
          despesasList.forEach( despesas => {
            desp.push(despesas.val());
            return false;
          });
    
          this.despesasList = desp;
          this.loadedDespesasList = desp;
        });
        /////////////
        
    });

    
  }
  //search
  initializeItems(){
    this.despesasList = this.loadedDespesasList;
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

    this.despesasList = this.despesasList.filter((v) => {
      if(v.categoria && q) {
        if (v.categoria.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });

    console.log(q, this.despesasList.length);
    console.log(this.despesasList)

  }
  //////



  adicionarDespesa(){
    this.navCtrl.push(AdicionarDespesaPage);
  }


  //DELETE NOVO Sliding
  deleteItem(sobre: string, valor: string, categoria: string){

    var refItem = this.database.list("users/" + this.userid + "/despesas");
    refItem.snapshotChanges([])
      .subscribe( filhos => {
        filhos.forEach( filho => {
          if(filho.payload.val().sobre === sobre && filho.payload.val().valor == valor && filho.payload.val().categoria == categoria){
            var itensRef = this.database.list("users/" + this.userid +  "/despesas/" +  filho.key);
            itensRef.remove();
          }
        });
      });
      this.iniciarChart(null,null, null, null, null, null, null, null,null,null,null,null,null,null,null,null,null);
      
 
  }



 


  openMenu() {
    this.menuCtrl.open();
  }
 
  infoDespesa(categoria: string, valor:string, sobre:string, data:string){
    this.user.setDespesa(categoria, valor, sobre, data);
    this.navCtrl.push(InfoDespesaPage);
  }


  ionViewDidLoad() {

    this.afAuth.authState.subscribe(data => {
      var userID;
      userID = data.uid;
      this.despesas = this.database.list("users/" + userID + "/despesas").valueChanges();
      this.despesas.subscribe(data => {
        var soma = 0.0;
        var somaAluguel = null;
        var somaCinema = null;
        var somaMercado = null;
        var somaCartao = null;
        var somaPensao = null;
        var somaGame = null;
        var somaCelular =null;
        var somaDomestico = null;
        var somaHosp =null;
        var somaFacu = null;
        var somaEscola = null;
        var somaFilhos = null;
        var somaEntre = null;
        var somaEletro = null;
        var somaArmas = null;
        var somaComida = null;
        var somaOutros = null;
        //somatorio zerado
        if(!data || !data.length){
          this.database.object("users/" + userID).update({
            somatorio : 0
          });
          
        }
        //somatorio
        data.forEach(despesas => {
          if(despesas.categoria === "Aluguel"){
            somaAluguel = somaAluguel + parseFloat(despesas.valor);
          }else if ( despesas.categoria === "Cinema"){
            somaCinema = somaCinema + parseFloat(despesas.valor);
          }else if ( despesas.categoria === "Mercado"){
            somaMercado = somaMercado + parseFloat(despesas.valor);
          }else if ( despesas.categoria === "Cartão de Crédito"){
            somaCartao = somaCartao + parseFloat(despesas.valor);
          }else if ( despesas.categoria === "Pensão"){
            somaPensao = somaPensao + parseFloat(despesas.valor);
          }else if ( despesas.categoria === "Video-Games"){
            somaGame = somaGame + parseFloat(despesas.valor);
          }else if ( despesas.categoria === "Celular"){
            somaCelular = somaCelular + parseFloat(despesas.valor);
          }else if ( despesas.categoria === "Material Doméstico"){
            somaDomestico = somaDomestico + parseFloat(despesas.valor);
          }else if ( despesas.categoria === "Hospedagem"){
            somaHosp = somaHosp + parseFloat(despesas.valor);
          }else if ( despesas.categoria === "Faculdade"){
            somaFacu = somaFacu + parseFloat(despesas.valor);
          }else if ( despesas.categoria === "Escola"){
            somaEscola = somaEscola + parseFloat(despesas.valor);
          }else if ( despesas.categoria === "Filhos"){
            somaFilhos = somaFilhos + parseFloat(despesas.valor);
          }else if ( despesas.categoria === "Entretenimento"){
            somaEntre = somaEntre + parseFloat(despesas.valor);
          }else if ( despesas.categoria === "Eletrodomésticos"){
            somaEletro = somaEletro + parseFloat(despesas.valor);
          }else if ( despesas.categoria === "Armas de fogo"){
            somaArmas = somaArmas + parseFloat(despesas.valor);
          }else if ( despesas.categoria === "Comida"){
            somaComida = somaComida + parseFloat(despesas.valor);
          }else if ( despesas.categoria === "Outros"){
            somaOutros = somaOutros + parseFloat(despesas.valor);
          }
          this.iniciarChart(somaAluguel, somaCinema, somaMercado, somaCartao, somaPensao, somaGame, somaCelular, somaDomestico, somaHosp, somaFacu, somaEscola, somaFilhos, somaEntre, somaEletro, somaArmas, somaComida, somaOutros);
          
          soma = soma + parseFloat(despesas.valor);
          this.database.object("users/" + userID).update({
            somatorio : soma,
          });
        });
      });          
    });

    //this.user.reniciarSomatorio();
   

    
  }

  iniciarChart(aluguel, cinema, mercado, cartao, pensao, game, celular, domestico, hosp, facu, escola, filhos, entre, eletro, armas, comida, outros){
    var myChart = Highcharts.chart('container', {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
          text: '<b>Gráfico de despesas<b>'
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
            name: 'Aluguel',
            y: aluguel,
          },{
            name: 'Cinema',
            y: cinema
          },
          {
            name: 'Mercado',
            y: mercado
          },{
            name: 'Cartão de crédito',
            y: cartao
          },{
            name: 'Pensão',
            y: pensao
          },{
            name: 'Video-Games',
            y: game
          },{
            name: 'Celular',
            y: celular
          },{
            name: 'Material Doméetico',
            y: domestico
          },{
            name: 'Hospedagem',
            y: hosp
          },{
            name: 'Faculdade',
            y: facu
            
          },{
            name: 'Escola',
            y: escola
          },{
            name: 'Filhos',
            y: filhos
          },{
            name: 'Entretenimento',
            y: entre
          },{
            name: 'Eletrodomésticos',
            y: eletro
          },{
            name: 'Armas de fogo',
            y: armas
          },{
            name: 'Comida',
            y: comida
          },{
            name: 'Outros',
            y: outros
          }]
      }]
    });

  }

 
  logout(){
    this.afAuth.auth.signOut();
    this.navCtrl.popToRoot();
  }
  
  

}
