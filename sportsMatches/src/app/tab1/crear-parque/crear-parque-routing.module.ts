import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearParquePage } from './crear-parque.page';

const routes: Routes = [
  {
    path: '',
    component: CrearParquePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearParquePageRoutingModule {}
