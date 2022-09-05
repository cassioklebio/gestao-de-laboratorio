import { Injectable } from '@angular/core';
import { Reagente } from '../model/reagentes.entities';
import { Constants } from '../util/constants';

@Injectable({
  providedIn: 'root'
})
export class ReagenteService {
  reagentes: Reagente[] = [];

  constructor() { }

  addReagente(reagente: Reagente) {
    this.reagentes.push(reagente);
    if(localStorage.getItem(Constants.REAGENTES_KEY) === null) {
      this.reagentes.push(reagente)!;
      localStorage.setItem(Constants.REAGENTES_KEY, JSON.stringify(this.reagentes));
    } else {
      this.reagentes = JSON.parse(localStorage.getItem(Constants.REAGENTES_KEY)!);
      this.reagentes.push(reagente)!; 
      localStorage.setItem(Constants.REAGENTES_KEY, JSON.stringify(this.reagentes));
    }
  }
}
