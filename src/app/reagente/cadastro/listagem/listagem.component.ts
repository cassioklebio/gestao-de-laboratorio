import { Component, Input, OnInit } from '@angular/core';
import { Reagente } from 'src/app/model/reagentes.entities';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  @Input() listaReagentes!: Reagente[];
  

  constructor() { }

  ngOnInit(): void {
  }

}
