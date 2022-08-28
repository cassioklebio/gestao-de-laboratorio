import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './cadastro/listagem/listagem.component';
import { EditComponent } from './edit/edit.component';
import { ReagenteRoutingModule } from './reagente.routing.module';
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
    ReagenteRoutingModule,
    FormsModule
  ],
  providers: [    
    FormBuilder,
  ]
})
export class ReagenteModule { }
