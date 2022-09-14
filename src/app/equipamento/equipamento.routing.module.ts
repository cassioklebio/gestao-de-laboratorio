import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CadastroComponent } from "./cadastro/cadastro.component";
import { ListagemComponent } from "./cadastro/listagem/listagem.component";
import { DetalheComponent } from "./detalhe/detalhe.component";
import { EditComponent } from "./edit/edit.component";




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
      
    },
    
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class EquipamentoRoutingModule {}