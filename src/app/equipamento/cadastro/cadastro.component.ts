import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IEquipamentosRequisicao } from 'src/app/model/equipamentos.entities';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  equipamentoForm!: FormGroup;

  nomeEquipamento = '';
  modelo = '';
  serie = '';
  fabricante = '';
  voltagem = '';

  requisicaoEquipamentos: IEquipamentosRequisicao = {
    nomeEquipamento: '',
    modelo: '',
    serie: '',
    fabricante: '',
    voltagem: '',
  }

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
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.equipamentoForm = this.fb.group({
      nomeEquipamento: ['', Validators.required],
      modelo: ['', Validators.required],
      serie: ['', Validators.required],
      fabricante: ['', Validators.required],
      voltagem: ['', Validators.required],

    });
  }


  salvar(): void { }

  limpar(): void {
    this.nomeEquipamento = " ";
    this.modelo = " ";
    this.serie = " ";
    this.fabricante = " ";
    this.voltagem = " ";
  }
}
