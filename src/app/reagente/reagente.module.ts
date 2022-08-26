import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './cadastro/listagem/listagem.component';
import { EditComponent } from './edit/edit.component';
import { ReagenteRoutingModule } from './reagente.routing.module';



@NgModule({
  declarations: [
    CadastroComponent,
    ListagemComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    ReagenteRoutingModule
  ]
})
export class ReagenteModule { }
