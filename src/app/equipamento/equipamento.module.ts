import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro/cadastro.component';
import { EditComponent } from './edit/edit.component';
import { ListagemComponent } from './listagem/listagem.component';



@NgModule({
  declarations: [
    CadastroComponent,
    EditComponent,
    ListagemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EquipamentoModule { }
