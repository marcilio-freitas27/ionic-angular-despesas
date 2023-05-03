import { Router, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TipoDespesaEnum } from '../enum/tipo-despesa.enum';
import { DespesasService } from '../service/despesas.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, ReactiveFormsModule, CommonModule],
})

export class Tab1Page {
  formGroup: FormGroup;
  tipo: string[];
  isAlertOpen = false;
  public alertButtons = ['OK'];
  valorMotivo: any;
  message: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public despesaService: DespesasService
  ) {
    this.message = "";
    this.formGroup = this.formBuilder.group({
      motivo: ['',[Validators.required]],
      valor: [0.0,[Validators.required]],
      tipo: [TipoDespesaEnum.OUTRO,[Validators.required]],
      data: [new Date().toISOString(),[Validators.required]],
      desconto: [0.0,[Validators.required]]
    });
    this.valorMotivo = this.formGroup.value.motivo;
    this.tipo = Object.values(TipoDespesaEnum);
  }

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }

  adicionar(): boolean{
    if(this.valorMotivo !== null && 
      this.formGroup.valid && 
      !this.despesaService.verificarDuplicidade(this.formGroup.value) ){
      this.despesaService.adicionar(this.formGroup.value);
      this.message = 'Despesa cadastrada com sucesso'; 
      this.setOpen(true);
      return true;
    }else{
      this.message = 'Não foi possível cadastrar a despesa.';
      this.setOpen(true);
      return false;
    }
  }
  

  ver(){
    this.router.navigate(['/tabs/tab2'])
  }

  limpar(){
    this.formGroup.setValue(
      {
        motivo: '',
        valor: 0.0,
        tipo: TipoDespesaEnum.OUTRO,
        data: new Date().toISOString(),
        desconto: 0.0
      }
    );
  }
}
