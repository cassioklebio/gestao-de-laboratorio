import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';
import { EditComponent } from './edit/edit.component';
import { VidrariaRoutingModule } from './vidraria.routing.module';



@NgModule({
  declarations: [
    CadastroComponent,
    ListagemComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    VidrariaRoutingModule
  ]
})
export class VidrariaModule { }
