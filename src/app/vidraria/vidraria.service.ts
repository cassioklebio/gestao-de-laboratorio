import { Injectable } from '@angular/core';
import { Vidraria } from '../model/vidrarias.entities';
import { Constants } from '../util/constants';

@Injectable({
  providedIn: 'root'
})
export class VidrariaService {
  vidrarias: Vidraria[] = [];

  constructor() { }

  addVidraria(vidraria: Vidraria) {
    this.vidrarias.push(vidraria);
    if(localStorage.getItem(Constants.VIDRARIA_KEY) === null) {
      this.vidrarias.push(vidraria)!;
      localStorage.setItem(Constants.VIDRARIA_KEY, JSON.stringify(this.vidrarias));
    } else {
      this.vidrarias = JSON.parse(localStorage.getItem(Constants.VIDRARIA_KEY)!);
      this.vidrarias.push(vidraria)!; 
      localStorage.setItem(Constants.VIDRARIA_KEY, JSON.stringify(this.vidrarias));
    }
  }
}
