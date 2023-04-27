import { Injectable } from '@angular/core';
import { Despesa } from '../model/despesa';

@Injectable({
  providedIn: 'root'
})
export class DespesasService {
  despesas: any[];

  constructor() {
    this.despesas = [];
   }

   adicionar(desp: any[]):boolean{
    if(desp != null){
      this.despesas.push(desp);
      console.log(this.despesas);
      return true;
    }
    return false;
   }

   obterTodasDespesas(): any[]{
    return this.despesas;
   }
}
