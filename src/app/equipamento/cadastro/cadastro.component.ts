import { Component, OnInit, ViewChild } from '@angular/core';
import { Equipamento } from 'src/app/model/equipamentos.entities';
import { EquipamentoService } from '../equipamento.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  equipamento!: Equipamento;
  equipamentos?: Equipamento[];

 

  isSubmitted!: boolean;
  isShowMessage: boolean = false;
  isSuccess!: boolean;
  message!: string;

  
  listaEquipamento = [
    {
      id: 1,
      nomeEquipamento: 'Estufa de secagem - 40 L',
      modelo: 'Bio Easy Digital 40L',
      serie: '3e3wqq21et5',
      fabricante: '7Lab',
      voltagem: '220V',
    },
    {
      id: 2,
      nomeEquipamento: 'Estufa de secagem - 100 L',
      modelo: 'Bio Easy Digital 100L',
      serie: '3e3wqq21et5',
      fabricante: '7Lab',
      voltagem: '220V',
    },
    {
      id: 3,
      nomeEquipamento: 'Estufa de secagem - 200 L',
      modelo: 'Bio Easy Digital 200L',
      serie: '3e3wqq21et5',
      fabricante: '7Lab',
      voltagem: '220V',
    },
    {
      id: 4,
      nomeEquipamento: 'Estufa de secagem  - 500 L',
      modelo: 'Bio Easy Digital 500L',
      serie: '3e3wqq21et5',
      fabricante: '7Lab',
      voltagem: '220V',
    }
  ]

  constructor(
    private equipamentoService: EquipamentoService
  ) { }



  ngOnInit(): void {
    this.equipamento = new Equipamento('','','','','');
  }


  onSubmit(): void { 
    this.isSubmitted = true;   
    this.equipamentoService.addEquipamento(this.equipamento);
    this.limpar();
    this.isShowMessage = true;
    this.isSuccess = true;
    this.message = 'Cadastro do Equipamento realizado com sucesso!';
    this.equipamento = new Equipamento('','','','',''); 
    

  }

  limpar(): void {
    this.equipamento.nomeEquipamento = " ";
    this.equipamento.modelo = " ";
    this.equipamento.serie = " ";
    this.equipamento.fabricante = " ";
    this.equipamento.voltagem = " ";
  }

  
  
}
