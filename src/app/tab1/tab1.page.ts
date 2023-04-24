import { CommonModule } from '@angular/common';

import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


export enum TipoDespesa{
  ALIMENTACAO = 'Alimentação',
  LAZER = 'Lazer',
  TRANSPORTE = 'Transporte',
  PET = 'Pet',
  JARDIM = 'Jardim',
  OUTRO = 'Outro'
}
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, ReactiveFormsModule, CommonModule],
})

export class Tab1Page {
  formGroup: FormGroup;
  mostrar: boolean;
  tipo: string[];

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = formBuilder.group({
      motivo: ['',[Validators.required]],
      valor: [0.0,[Validators.required]],
      tipo: [TipoDespesa.OUTRO,[Validators.required]],
      data: [new Date().toISOString(),[Validators.required]]
    });
    this.mostrar = true;
    this.tipo = Object.values(TipoDespesa);
  }

  adicionar(){
    console.log(this.formGroup.value);
  }

  ver(){
    this.mostrar = !this.mostrar;
  }

  limpar(){
    this.formGroup.setValue(
      {
        motivo: '',
        valor: 0.0,
        tipo: TipoDespesa.OUTRO,
        data: new Date().toISOString()
      }
    );
  }
}
