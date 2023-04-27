import { Injectable } from '@angular/core';
import { Despesa } from '../model/despesa';

@Injectable({
  providedIn: 'root'
})
export class DespesasService {
  despesas: Despesa[];

  constructor() {
    this.despesas = [];
   }

   adicionar(desp: Despesa):boolean{
    if(desp != null){
      this.despesas.push(desp);
      console.log(this.despesas);
      return true;
    }
    return false;
   }

   obterTodasDespesas(): Despesa[]{
    return this.despesas;
   }
}
