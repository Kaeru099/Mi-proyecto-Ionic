import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InsertDatosPageRoutingModule } from './insert-datos-routing.module';

import { InsertDatosPage } from './insert-datos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InsertDatosPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [InsertDatosPage]
})
export class InsertDatosPageModule {}
