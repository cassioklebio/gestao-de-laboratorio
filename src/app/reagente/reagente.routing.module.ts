import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CadastroComponent } from "./cadastro/cadastro.component";
import { EditComponent } from "./edit/edit.component";
import { ListagemComponent } from "./cadastro/listagem/listagem.component";

const routes: Routes =  [
    {
        path: "listagem",
        component: ListagemComponent,
        
      },
      {
        path: "cadastro",
        component: CadastroComponent,
        
      },
      {
        path: "edicao/edit/:id",
        component: EditComponent,
        
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ReagenteRoutingModule {}