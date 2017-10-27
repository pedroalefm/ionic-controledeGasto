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
  private saldo:String;
  private user = {
      nome: "",
      email:"",
      saldo: "",
  }

  getUsuario(){
    return this.user;
  }

  setUsuario(nome: string, email: string, saldo: string ){
    this.user.nome = nome;
    this.user.email = email;
    this.user.saldo = saldo;
  }

  getSaldo(){
      return this.saldo;
  }
  setSaldo(saldo:String){
    this.saldo = saldo;
  }

}