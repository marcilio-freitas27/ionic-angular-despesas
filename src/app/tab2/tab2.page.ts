import { DespesasService } from './../service/despesas.service';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { Despesa } from '../model/despesa';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, CommonModule]
})
export class Tab2Page {
  despesas: Despesa[];
  constructor(
    public despesaService: DespesasService,
    private router: Router
  ) {
    this.despesas = [];
  }

  ngOnInit(): void{
    this.pegarDespesas();
  }

  pegarDespesas():Despesa[]{
    this.despesas = this.despesaService.obterTodasDespesas();
    return this.despesas;
  }

  voltar(){
    this.router.navigate(['/tabs/tab1'])
  }

}
