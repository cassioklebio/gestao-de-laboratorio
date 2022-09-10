import { Component, OnInit } from '@angular/core';
import { EquipamentoService } from '../equipamento.service';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent implements OnInit {

  dadoEquipamento: any = {}
  equipamento: any;

  constructor(private equipamentoService: EquipamentoService) { }

  ngOnInit(): void {
    this.getBy(1);
  }

  getBy(id: number){
    this.dadoEquipamento = this.equipamentoService.getById(id);
     
   
    console.log(this.dadoEquipamento);
    return this.dadoEquipamento;
  }

 

}
