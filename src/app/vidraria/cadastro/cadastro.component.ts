import { Component, OnInit } from '@angular/core';
import { Vidraria } from 'src/app/model/vidrarias.entities';
import { VidrariaService } from '../vidraria.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  vidraria!: Vidraria;
  vidrarias?: Vidraria[];  

  isSubmitted!: boolean;
  isShowMessage: boolean = false;
  isSuccess!: boolean;
  message!: string; 


 
  listaVidrarias = [
    {
      id: 1,
      nomeVidraria: 'Balão fundo chato',
      codigo: 'seswawsw',
      volume: '1L',
      fundo: 'chato',
      gargalo: 'fino',
      cor: 'transparente',
      temperatura: '200C',
    },
    {
      id: 2,
      nomeVidraria: 'Balão fundo redondo',
      codigo: 'seswawsw',
      volume: '250Ml',
      fundo: 'redondo',
      gargalo: 'fino',
      cor: 'transparente',
      temperatura: '500C',
    },
    {
      id: 3,
      nomeVidraria: 'Balão volumétrico',
      codigo: 'seswawsw',
      volume: '50Ml',
      fundo: 'redondo',
      gargalo: 'fino',
      cor: 'transparente',
      temperatura: '600C',
    },
    {
      id: 4,
      nomeVidraria: 'Bastão de vidro',
      codigo: 'seswawsw',
      volume: '50Ml',
      fundo: 'fino',
      gargalo: 'fino',
      cor: 'transparente',
      temperatura: '10C',
    },
    {
      id: 5,
      nomeVidraria: ' Becker',
      codigo: 'seswawsw',
      volume: '330Ml',
      fundo: 'largo',
      gargalo: 'largo',
      cor: 'branco',
      temperatura: '100C',
    }
  ]



  constructor(
    private vidrariaService: VidrariaService
  ) { }

  ngOnInit(): void {
   this.vidraria = new Vidraria('','','','','','','');
  }

  onSubmit(): void { 
    this.isSubmitted = true;   
    this.vidrariaService.addVidraria(this.vidraria);
    this.limpar();
    this.isShowMessage = true;
    this.isSuccess = true;
    this.message = 'Cadastro do Vidraria realizado com sucesso!';
    this.vidraria = new Vidraria('','','','','','','');
  }

  limpar(): void {
    this.vidraria.nomeVidraria = "";
    this.vidraria.codigo = '';
    this.vidraria.volume = '';
    this.vidraria.fundo = '';
    this.vidraria.gargalo = '';
    this.vidraria.cor = '';
    this.vidraria.temperatura = '';
  
  }
}
