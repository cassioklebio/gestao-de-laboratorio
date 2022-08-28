import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IReagentesRequisicao, IReagentesResponse } from 'src/app/model/reagentes.entities';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  reagenteForm!: FormGroup;

  nomeReagente = '';
  formula = '';
  pesoMolecular = '';
  cas = '';
  aspecto = '';
  quantidade = '';
  teorDePureza = '';

  requisicaoReagentes: IReagentesRequisicao = {
    nomeReagente: '',
    formula: '',
    pesoMolecular: '',
    cas: '',
    aspecto: '',
    quantidade: '',
    teorDePureza: '',
  }

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
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.reagenteForm = this.fb.group({
      nomeReagente: ['', Validators.required],
      formula: ['', Validators.required],
      pesoMolecular: ['', Validators.required],
      cas: ['', Validators.required],
      aspecto: ['', Validators.required],
      quantidade: ['', Validators.required],
      teorDePureza: ['', Validators.required],

    });
  }

  salvar(): void { }

  limpar(): void {
    this.nomeReagente = '';
    this.formula = '';
    this.pesoMolecular = '';
    this.cas = '';
    this.aspecto = '';
    this.quantidade = '';
    this.teorDePureza = '';
  }

}
