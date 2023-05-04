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

   verificarDuplicidade(desp: Despesa): boolean{
    if (this.despesas.find((element) => element === desp)) {
      return true;
    }
    return false;
   }

   adicionar(desp: Despesa):boolean{
    if(desp !== null && !this.verificarDuplicidade(desp)){
      this.despesas.push(desp);
      return true;
    }
    return false;
   }

   obterTodasDespesas(): Despesa[]{
    return this.despesas;
   }
}
