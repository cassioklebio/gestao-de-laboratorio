import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IVidrariaRequisicao } from 'src/app/model/vidrarias.entities';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  vidrariaForm!: FormGroup;

  nomeVidraria = '';
  codigo = '';
  volume = '';
  fundo = '';
  gargalo = '';
  cor = '';
  temperatura = '';

  RequisicaoVidraria: IVidrariaRequisicao = {
    nomeVidraria: '',
    codigo: '',
    volume: '',
    fundo: '',
    gargalo: '',
    cor: '',
    temperatura: '',
  }

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
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.vidrariaForm = this.fb.group({
      nomeVidraria: ['', Validators.required],
      codigo: ['', Validators.required],
      volume: ['', Validators.required],
      fundo: ['', Validators.required],
      gargalo: ['', Validators.required],
      cor: ['', Validators.required],
      temperatura: ['', Validators.required],

    });
  }

  salvar(): void { }

  limpar(): void {
    this.nomeVidraria = '';
    this.codigo = '';
    this.volume = '';
    this.fundo = '';
    this.gargalo = '';
    this.cor = '';
    this.temperatura = '';
  }

}
