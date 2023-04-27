import { DespesasService } from './../service/despesas.service';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { Despesa } from '../model/despesa';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent]
})
export class Tab2Page {
  despesas: any[];
  constructor(public despesaService: DespesasService) {
    this.despesas = [];
  }

  ngOnInit(): void{
    this.pegarDespesas();
  }
  
  pegarDespesas():any[]{
    this.despesas = this.despesaService.obterTodasDespesas();
    return this.despesas;
  }

}
