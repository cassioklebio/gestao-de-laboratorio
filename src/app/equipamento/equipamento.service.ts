import { Injectable } from '@angular/core';
import { Equipamento } from '../model/equipamentos.entities';
import { Constants } from '../util/constants';


@Injectable({
  providedIn: 'root'
})
export class EquipamentoService {
  equipamentos!: Equipamento[];
  constructor() {
    
  }

 

  addEquipamento(equipamento: Equipamento) {
    this.equipamentos.push(equipamento);
    if(localStorage.getItem(Constants.EQUIPAMENTOS_KEY) === null) {
      this.equipamentos.push(equipamento)!;
      localStorage.setItem(Constants.EQUIPAMENTOS_KEY, JSON.stringify(this.equipamentos));
    } else {
      this.equipamentos = JSON.parse(localStorage.getItem(Constants.EQUIPAMENTOS_KEY)!);
      this.equipamentos.push(equipamento)!; 
      localStorage.setItem(Constants.EQUIPAMENTOS_KEY, JSON.stringify(this.equipamentos));
    }
  }

 

  
  
  

}
