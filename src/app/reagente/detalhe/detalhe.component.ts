import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReagenteService } from '../reagente.service';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent implements OnInit {

  listReagentesDetalhe: any = []
  reagenteId: any = 0;

  constructor(private reagenteService: ReagenteService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.reagenteId  = params['id'])
    this.getBy(this.reagenteId);
  }

  getBy(reagenteId: number){
    this.reagenteService.getById(reagenteId).subscribe((response)=>{
     this.listReagentesDetalhe = response;
     
   });
 }

}
