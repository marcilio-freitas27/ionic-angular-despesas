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
  mostrar: boolean;
  tipo: string[];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public despesaService: DespesasService
  ) {
    this.formGroup = formBuilder.group({
      motivo: ['',[Validators.required]],
      valor: [0.0,[Validators.required]],
      tipo: [TipoDespesaEnum.OUTRO,[Validators.required]],
      data: [new Date().toISOString(),[Validators.required]]
    });
    this.mostrar = true;
    this.tipo = Object.values(TipoDespesaEnum);
  }

  adicionar(){
    this.despesaService.adicionar(this.formGroup.value);
    // console.log(this.formGroup.value);
  }

  ver(){
    // this.mostrar = !this.mostrar;
    this.router.navigate(['/tabs/tab2'])
  }

  limpar(){
    this.formGroup.setValue(
      {
        motivo: '',
        valor: 0.0,
        tipo: TipoDespesaEnum.OUTRO,
        data: new Date().toISOString()
      }
    );
  }
}
