import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro/cadastro.component';
import { EditComponent } from './edit/edit.component';
import { ListagemComponent } from './cadastro/listagem/listagem.component';
import { EquipamentoRoutingModule } from './equipamento.routing.module';

import { FormBuilder, FormsModule } from '@angular/forms';
import { DetalheComponent } from './detalhe/detalhe.component';


@NgModule({
  declarations: [
    CadastroComponent,
    EditComponent,
    ListagemComponent,
    DetalheComponent
  ],
  imports: [
    CommonModule,
    EquipamentoRoutingModule,
    FormsModule,
    
    
    
    
  ],
  providers: [    
    FormBuilder,
  ]
})
export class EquipamentoModule { }
