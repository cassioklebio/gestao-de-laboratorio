import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './cadastro/listagem/listagem.component';
import { EditComponent } from './edit/edit.component';
import { ReagenteRoutingModule } from './reagente.routing.module';
import { FormBuilder, FormsModule } from '@angular/forms';
import { DetalheComponent } from './detalhe/detalhe.component';
import { HttpClientModule } from '@angular/common/http';
import { ReagenteService } from './reagente.service';



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
    FormsModule,
    HttpClientModule,
  ],
  providers: [    
    FormBuilder,
    HttpClientModule,
    ReagenteService
  ]
})
export class ReagenteModule { }
