import { Router, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { Component } from '@angular/core';
import { IonDatetime, IonicModule } from '@ionic/angular';
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
  date: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public despesaService: DespesasService
  ) {
    this.message = "";
    this.date = new Date().toISOString();
    this.formGroup = this.formBuilder.group({
      motivo: ['',[Validators.required]],
      valor: [0.0,[Validators.required]],
      tipo: [TipoDespesaEnum.OUTRO,[Validators.required]],
      data: [this.date,[Validators.required]],
      desconto: [0.0,[Validators.required]]
    });
    this.valorMotivo = this.formGroup.value.motivo;
    this.tipo = Object.values(TipoDespesaEnum);
    this.date = this.formGroup.value.date;
    
  }

  ngOnInit() {
    
  }

  setOpen(isOpen: boolean): void {
    this.isAlertOpen = isOpen;
  }

  adicionar(): boolean{
    if(this.valorMotivo !== null && 
      this.formGroup.valid && 
      !this.despesaService.verificarDuplicidade(this.formGroup.value) ){
      this.despesaService.adicionar(this.formGroup.value);
      this.message = 'Despesa cadastrada com sucesso.'; 
      this.setOpen(true);
      return true;
    }else{
      this.message = 'Não foi possível cadastrar a despesa.';
      this.setOpen(true);
      return false;
    }
  }
  
  ver(): void{
    this.router.navigate(['/tabs/tab2'])
  }

  limpar(): void{
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

  setDate(): void{
    this.formGroup.value.data = this.formGroup.value.data.substring(0, 16).split("T").join(" ")
    this.date = this.formGroup.value.data;
    console.log('data', this.date);
  }
}
