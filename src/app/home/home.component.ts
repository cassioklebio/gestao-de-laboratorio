import { Component, OnInit } from '@angular/core';
import { EquipamentoService } from '../equipamento/equipamento.service';
import { ReagenteService } from '../reagente/reagente.service';
import { VidrariaService } from '../vidraria/vidraria.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  listaEquipamento: any = []
  contItemListaEquipamento = 0;

  listaReagentes: any = []
  contItemListaReagente = 0;

  listaVidrarias: any = []
  contItemListaVidraria = 0;
  

  constructor(private equipamentoService: EquipamentoService,
    private reagenteService: ReagenteService,
    private vidrariaService: VidrariaService) { }

  ngOnInit(): void {
    this.contItemlistEquipamentos();
    this.contItemlistReagentes();
    this.contItemlistVidrarias();
    
  }

  //contagem dos equipamentos cadastrados
  contItemlistEquipamentos(){
    this.equipamentoService.list().subscribe((response)=>{
      this.listaEquipamento = response;
      this.contItemListaEquipamento = this.listaEquipamento.length;
      return this.contItemListaEquipamento; 

    });
  }

  //contagem dos Reagentes cadastrados
  contItemlistReagentes(){
    this.reagenteService.list().subscribe((response)=>{
      this.listaReagentes = response;
      this.contItemListaReagente = this.listaReagentes.length;
      return this.contItemListaReagente; 

    });
  }

  //contagem dos Vidrarias cadastrados
  contItemlistVidrarias(){
    this.vidrariaService.list().subscribe((response)=>{
      this.listaVidrarias = response;
      this.contItemListaVidraria = this.listaVidrarias.length;
      return this.contItemListaVidraria; 

    });
  }

  
}
