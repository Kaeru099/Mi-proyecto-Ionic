import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path: 'insert-datos',
    loadChildren: () => import('./insert-datos/insert-datos.module').then( m => m.InsertDatosPageModule)
  },
  {
    path: 'crear-parque',
    loadChildren: () => import('./crear-parque/crear-parque.module').then( m => m.CrearParquePageModule)
  },
  {
    path: 'crear-sitio',
    loadChildren: () => import('./crear-sitio/crear-sitio.module').then( m => m.CrearSitioPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
