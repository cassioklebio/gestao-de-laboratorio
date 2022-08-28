import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'equipamento',
    loadChildren: () => import('./equipamento/equipamento.module').then(x => x.EquipamentoModule)
  },
  {
    path: 'experimento',
    loadChildren: () => import('./experimento/experimento.module').then(x => x.ExperimentoModule)
  },  
  {
    path: 'vidraria',
    loadChildren: () => import('./vidraria/vidraria.module').then(x => x.VidrariaModule)
  },
  {
    path: 'reagente',
    loadChildren: () => import('./reagente/reagente.module').then(x => x.ReagenteModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
