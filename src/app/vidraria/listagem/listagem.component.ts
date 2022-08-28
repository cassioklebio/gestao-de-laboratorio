import { Component, Input, OnInit } from '@angular/core';
import { IVidrariaResponse } from 'src/app/model/vidrarias.entities';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  @Input() listaVidrarias!: IVidrariaResponse[];
  constructor() { }

  ngOnInit(): void {
  }

}
