import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';
import { EditComponent } from './edit/edit.component';
import { VidrariaRoutingModule } from './vidraria.routing.module';
import { FormBuilder, FormsModule } from '@angular/forms';
import { DetalheComponent } from './detalhe/detalhe.component';



@NgModule({
  declarations: [
    CadastroComponent,
    ListagemComponent,
    EditComponent,
    DetalheComponent
  ],
  imports: [
    CommonModule,
    VidrariaRoutingModule,
    FormsModule
  ],
  providers: [    
    FormBuilder,
  ]
})
export class VidrariaModule { }
