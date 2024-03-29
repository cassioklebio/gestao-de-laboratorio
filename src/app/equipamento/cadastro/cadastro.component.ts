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

  isSubmitted!: boolean;
  isShowMessage: boolean = false;
  isShowCadastro: boolean = true;
  isShowListagem: boolean = true;
  isShowDetalhe: boolean = false;
  isSuccess!: boolean;
  message!: string;
  messageList!: string;
  

  
  listaEquipamento: any = []
  listEquipamentosDetalhe: any = []

  constructor(
    private equipamentoService: EquipamentoService
  ) { 
    
  }



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
      if(this.listaEquipamento.length == 0){
        this.messageList = "Nenhum equipamento cadastrado";
        this.isShowListagem = false;
        
      } 
    });
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

    }));
  }

  edit(equipamento: any){
    this.equipamentoService.update(equipamento.id,equipamento).subscribe((response)=>{
      this.listEquipamentos();
    },(error=>{

    }));
  }
 


  
}
