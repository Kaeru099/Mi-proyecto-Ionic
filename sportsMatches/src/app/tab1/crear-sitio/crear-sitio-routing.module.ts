import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearSitioPage } from './crear-sitio.page';

const routes: Routes = [
  {
    path: '',
    component: CrearSitioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearSitioPageRoutingModule {}
