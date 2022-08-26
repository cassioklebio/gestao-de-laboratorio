import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro/cadastro.component';
import { EditComponent } from './edit/edit.component';
import { ListagemComponent } from './cadastro/listagem/listagem.component';
import { EquipamentoRoutingModule } from './equipamento.routing.module';




@NgModule({
  declarations: [
    CadastroComponent,
    EditComponent,
    ListagemComponent
  ],
  imports: [
    CommonModule,
    EquipamentoRoutingModule
  ]
})
export class EquipamentoModule { }
