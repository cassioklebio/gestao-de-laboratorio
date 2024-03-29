import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CadastroComponent } from "./cadastro/cadastro.component";
import { EditComponent } from "./edit/edit.component";
import { ListagemComponent } from "./listagem/listagem.component";
import { DetalheComponent } from './detalhe/detalhe.component';

const routes: Routes = [
    
    {
        path: "listagem",
        component: ListagemComponent,
        
      },
      {
        path: "cadastro",
        component: CadastroComponent,
        
      },
      {
        path: "edit/:id",
        component: EditComponent,
        
      },
      {
        path: "detalhe/:id",
        component: DetalheComponent,
        
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class VidrariaRoutingModule {}