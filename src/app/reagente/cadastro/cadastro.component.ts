import { Component, OnInit } from '@angular/core';
import { Reagente } from 'src/app/model/reagentes.entities';
import { ReagenteService } from '../reagente.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  reagente!: Reagente;
  

  isSubmitted!: boolean;
  isShowMessage: boolean = false;
  isShowCadastro: boolean = true;
  isShowDetalhe: boolean = false;
  isSuccess!: boolean;
  message!: string;
 

  
  listaReagentes: any = []

  constructor(
    private reagenteService: ReagenteService
  ) { }

  ngOnInit(): void {
    this.reagente = new Reagente('','','','','','','');
    this.listReagentes();
  }

  // função de cadastro de Reagentes para o json serve
  onSubmit(){
    this.reagenteService.create(this.reagente).subscribe((response)=>{
      this.listReagentes();
      this.limpar();
      this.isShowMessage = true;
      this.isSuccess = true;
      this.message = 'Cadastro de Reagente realizado com sucesso!';
    },(error=>{

    }));
  }

  edit(reagente: any){
    this.reagenteService.update(reagente.id,reagente).subscribe((response)=>{
      this.listReagentes();
    },(error=>{

    }));
  }

  getBy(id: number){
    return this.reagenteService.getById(id).then();
  }

  listReagentes(){
    this.reagenteService.list().subscribe((response)=>{
      this.listaReagentes = response;
    });
  }

  limpar(): void {
    this.reagente.nomeReagente = '';
    this.reagente.formula = '';
    this.reagente.pesoMolecular = '';
    this.reagente.cas = '';
    this.reagente.aspecto = '';
    this.reagente.quantidade = '';
    this.reagente.teorDePureza = '';
  }

   // onSubmit(): void {
  //   this.isSubmitted = true;
  //   this.reagenteService.addReagente(this.reagente);
  //   this.limpar();
  //   this.isShowMessage = true;
  //   this.isSuccess = true;
  //   this.message = 'Cadastro do Reagente realizado com sucesso!';
  //   this.reagente = new Reagente('','','','','','','');
  // }

}
