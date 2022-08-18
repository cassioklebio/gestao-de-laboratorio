import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';
import { EditComponent } from './edit/edit.component';



@NgModule({
  declarations: [
    CadastroComponent,
    ListagemComponent,
    EditComponent
  ],
  imports: [
    CommonModule
  ]
})
export class VidrariaModule { }
