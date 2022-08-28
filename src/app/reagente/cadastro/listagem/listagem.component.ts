import { Component, Input, OnInit } from '@angular/core';
import { IReagentesResponse } from 'src/app/model/reagentes.entities';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  @Input() listaReagentes!: IReagentesResponse[];

  constructor() { }

  ngOnInit(): void {
  }

}
