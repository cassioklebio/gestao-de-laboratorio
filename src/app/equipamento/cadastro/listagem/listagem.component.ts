import { Component, Input, OnInit } from '@angular/core';
import { Equipamento } from 'src/app/model/equipamentos.entities';


@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

<<<<<<< HEAD
  @Input() listaEquipamentos: Equipamento[] = [];
=======
  @Input() listaEquipamento: any[] = [];
>>>>>>> feature-atividade-12

  constructor() { }

  ngOnInit(): void {
  }

}
