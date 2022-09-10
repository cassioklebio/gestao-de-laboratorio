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
  reagentes?: Reagente[];

  isSubmitted!: boolean;
  isShowMessage: boolean = false;
  isSuccess!: boolean;
  message!: string; 

  
  listaReagentes = [
    {
      id: 1,
      nomeReagente: "ACETATO DE CHUMBO",
      formula: "CH3CHO ",
      pesoMolecular: "44,04",
      cas: "eeee",
      aspecto: "pó branco",
      quantidade: "250g",
      teorDePureza: "98",
    },
    {
      id: 2,
      nomeReagente: "DIMETILAMINOBENZALDEÍDO",
      formula: "C9H11NO",
      pesoMolecular: "149,19",
      cas: "eeee",
      aspecto: "cristal",
      quantidade: "250g",
      teorDePureza: "99",
    },
    {
      id: 3,
      nomeReagente: "ACETATO DE SÓDIO FR",
      formula: " ch3coona",
      pesoMolecular: "82,03",
      cas: "eeee",
      aspecto: "cristal incolor",
      quantidade: "1kg",
      teorDePureza: "99,5",
    },

    {
      id: 4,
      nomeReagente: "ACIDO OXÁLICO ",
      formula: " C2H2O4",
      pesoMolecular: "90,03",
      cas: "144-62-7",
      aspecto: "liquido pastoso",
      quantidade: "500",
      teorDePureza: "98",
    },
    {
      id: 5,
      nomeReagente: "ANILINA",
      formula: " C6H7N",
      pesoMolecular: "93,13",
      cas: "62-53-3",
      aspecto: "liquido oleoso incolor",
      quantidade: "250",
      teorDePureza: "99",
    }

  ]

  constructor(
    private reagenteService: ReagenteService
  ) { }

  ngOnInit(): void {
    this.reagente = new Reagente('','','','','','','');
  }


  onSubmit(): void {
    this.isSubmitted = true;
    this.reagenteService.addReagente(this.reagente);
    this.limpar();
    this.isShowMessage = true;
    this.isSuccess = true;
    this.message = 'Cadastro do Reagente realizado com sucesso!';
    this.reagente = new Reagente('','','','','','','');
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

}
