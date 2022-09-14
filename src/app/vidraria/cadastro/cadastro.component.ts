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
  

  isSubmitted!: boolean;
  isShowMessage: boolean = false;
  isShowCadastro: boolean = true;
  isShowDetalhe: boolean = false;
  isSuccess!: boolean;
  message!: string;


 
  listaVidrarias: any = []



  constructor(
    private vidrariaService: VidrariaService
  ) { }

  ngOnInit(): void {
   this.vidraria = new Vidraria('','','','','','','');
   this.listVidrarias();
  }

  // função de cadastro de equipamento para o json serve
  onSubmit(){
    this.vidrariaService.create(this.vidraria).subscribe((response)=>{
      this.listVidrarias();
      this.limpar();
      this.isShowMessage = true;
      this.isSuccess = true;
      this.message = 'Cadastro da Vidraria realizado com sucesso!';
    },(error=>{

    }));
  }

  edit(vidraria: any){
    this.vidrariaService.update(vidraria.id,vidraria).subscribe((response)=>{
      this.listVidrarias();
    },(error=>{

    }));
  }

  

  // lista dos os equipamentos cadastrados
  listVidrarias(){
    this.vidrariaService.list().subscribe((response)=>{
      this.listaVidrarias = response;
    });
    this.contItemLista(this.listVidrarias);
  }

  contItemLista(lista: any){
    let cont = 0;
    for (let e of lista){
      cont ++;
    }

    return cont;

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

    // onSubmit(): void { 
  //   this.isSubmitted = true;   
  //   this.vidrariaService.addVidraria(this.vidraria);
  //   this.limpar();
  //   this.isShowMessage = true;
  //   this.isSuccess = true;
  //   this.message = 'Cadastro do Vidraria realizado com sucesso!';
  //   this.vidraria = new Vidraria('','','','','','','');
  // }
}
