import { Component, Input, OnInit } from '@angular/core';
import { Vidraria } from 'src/app/model/vidrarias.entities';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  @Input() listaVidrarias!: Vidraria[];
  constructor() { }

  ngOnInit(): void {
  }

}
