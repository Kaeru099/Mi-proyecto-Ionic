import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearSitioPageRoutingModule } from './crear-sitio-routing.module';

import { CrearSitioPage } from './crear-sitio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearSitioPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CrearSitioPage]
})
export class CrearSitioPageModule {}
