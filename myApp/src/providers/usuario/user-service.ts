import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the ProdutoProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserService {

  constructor() {

  }
  private somatorioSaldo = 0;

  private somatorio = 0;

  private somaAlguel = 0;
  
  private color: string;
  
  //private estado: boolean;

  setColor(value){
    this.color = value;
  }

  getColor(){
    return this.color;
  }

  private despesa = {
    categoria: "",
    sobre: "",
    valor: "",
    data: ""
  }

  private saldo = {
    categoria: "",
    sobre: "",
    valor: "",
    data:""
  }

  private user = {
      nome: "",
      email:"",
      saldo: "",
  }
///////////////////////////////////////////////
//Usuario
  getUsuario(){
    return this.user;
  }

  setUsuario(nome: string, email: string, saldo: string ){
    this.user.nome = nome;
    this.user.email = email;
    this.user.saldo = saldo;
  }
////////////////////////////////////////////////
//Despesas
  setDespesa(categoria: string, valor: string, sobre:string, data:string){
    this.despesa.categoria = categoria;
    this.despesa.valor = valor;
    this.despesa.sobre = sobre;
    this.despesa.data = data;

  }

  getDespesa(){
    return this.despesa;
  }
  ///////////////////////////////////////////////
  //Somatorio da despesa
  setSomatorio (value){
    this.somatorio = this.somatorio + parseInt(value);
  }

  getSomatorio(){
    return this.somatorio;
  }

  setSomaAluguel (value){
    this.somaAlguel = value;
  }

  getSomaAluguel(){
    return this.somaAlguel;
  }

  reniciarSomatorio(){
    this.somatorio = 0;
  }
//////////////////////////////////////////////////
//Saldo (Lista)

setSaldo(categoria: string, valor: string, sobre:string, data:string){
  this.saldo.categoria = categoria;
  this.saldo.valor = valor;
  this.saldo.sobre = sobre;
  this.saldo.data = data;

}
getSaldo(){
  return this.saldo;
}
////////////////////////////////////////////////////
//Somatorio do saldo

setSomatorioSaldo (value){
  this.somatorioSaldo = this.somatorioSaldo + parseInt(value);
}

getSomatorioSaldo(){
  return this.somatorioSaldo;
}

reniciarSomatorioSaldo(){
  this.somatorioSaldo = 0;
}
///////////////////////////////////////////////////////

}