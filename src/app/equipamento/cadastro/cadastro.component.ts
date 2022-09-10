import { Component, OnInit, ViewChild } from '@angular/core';
import { Equipamento } from 'src/app/model/equipamentos.entities';
import { EquipamentoService } from '../equipamento.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
<<<<<<< HEAD

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
=======

  equipamento!: Equipamento; 

  isSubmitted!: boolean;
  isShowMessage: boolean = false;
  isShowCadastro: boolean = true;
  isShowDetalhe: boolean = false;
  isSuccess!: boolean;
  message!: string;

  
  listaEquipamento: any = []
>>>>>>> feature-atividade-12

  constructor(
    private equipamentoService: EquipamentoService
  ) { }

<<<<<<< HEAD


  ngOnInit(): void {
    this.equipamento = new Equipamento('','','','','');
=======


  ngOnInit(): void {
    this.equipamento = new Equipamento('','','','','');
    this.listEquipamentos();
    
  }

  //função que limpa os input do formulario
  limpar(): void {
    this.equipamento.nomeEquipamento = " ";
    this.equipamento.modelo = " ";
    this.equipamento.serie = " ";
    this.equipamento.fabricante = " ";
    this.equipamento.voltagem = " ";
  }

  // lista dos os equipamentos cadastrados
  listEquipamentos(){
    this.equipamentoService.list().subscribe((response)=>{
      this.listaEquipamento = response;
    });
>>>>>>> feature-atividade-12
  }

  // função de cadastro de equipamento para o json serve
  onSubmit(){
    this.equipamentoService.create(this.equipamento).subscribe((response)=>{
      this.listEquipamentos();
      this.limpar();
      this.isShowMessage = true;
      this.isSuccess = true;
      this.message = 'Cadastro do Equipamento realizado com sucesso!';
    },(error=>{

<<<<<<< HEAD
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

  
=======
    }));
  }

  edit(equipamento: any){
    this.equipamentoService.update(equipamento.id,equipamento).subscribe((response)=>{
      this.listEquipamentos();
    },(error=>{

    }));
  }

  getBy(id: number){
    return this.equipamentoService.getById(id).then();
  }

  detalhe(){
    this.isShowCadastro = false;
    this.isShowDetalhe = true;
    
  }
 

 // onSubmit(): void { 
    // this.isSubmitted = true;   
    // this.equipamentoService.saveEquipamento(this.equipamento);
    // this.limpar();
    // this.isShowMessage = true;
    // this.isSuccess = true;
    // this.message = 'Cadastro do Equipamento realizado com sucesso!';
    // this.equipamento = new Equipamento('','','','','');    

 // }
>>>>>>> feature-atividade-12
  
}
