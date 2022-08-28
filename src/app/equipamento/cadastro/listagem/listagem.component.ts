import { Component, Input, OnInit } from '@angular/core';
import { IEquipamentosResponse } from '../../../model/equipamentos.entities';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  @Input() listaEquipamentos!: IEquipamentosResponse[];

  constructor() { }

  ngOnInit(): void {
  }

}
