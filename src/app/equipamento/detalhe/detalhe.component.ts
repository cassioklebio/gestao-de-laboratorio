import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EquipamentoService } from '../equipamento.service';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent implements OnInit {

  listEquipamentosDetalhe: any = []
  equipamento: any;
  equipamentoId: any = 0;
  

  constructor(private equipamentoService: EquipamentoService,
    private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.equipamentoId  = params['id'])
    this.getBy(this.equipamentoId);
  }

  

  getBy(equipamentoId: number){
    this.equipamentoService.getById(equipamentoId).subscribe((response)=>{
     this.listEquipamentosDetalhe = response;
  });
 }

 

}
