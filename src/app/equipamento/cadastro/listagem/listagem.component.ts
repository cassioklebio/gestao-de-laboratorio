import { Component, Input, OnInit } from '@angular/core';
import { Equipamento } from 'src/app/model/equipamentos.entities';


@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  @Input() listaEquipamentos: Equipamento[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
