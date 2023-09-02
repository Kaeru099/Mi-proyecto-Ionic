import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InsertDatosPage } from './insert-datos.page';

const routes: Routes = [
  {
    path: '',
    component: InsertDatosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsertDatosPageRoutingModule {}
