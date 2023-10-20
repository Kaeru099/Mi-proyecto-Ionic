import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearParquePageRoutingModule } from './crear-parque-routing.module';

import { CrearParquePage } from './crear-parque.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearParquePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CrearParquePage]
})
export class CrearParquePageModule {}
