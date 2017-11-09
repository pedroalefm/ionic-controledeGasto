import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the ProdutoProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DespesaService {

  constructor() {

  }

  private despesa = {
    categoria: "",
    sobre: "",
    valor: ""
  }


 
  setDespesa(categoria: string, valor: string, sobre:string ){
    this.despesa.categoria = categoria;
    this.despesa.valor = valor;
    this.despesa.sobre = sobre;

  }

  getDespesa(){
    return this.despesa;
  }


}