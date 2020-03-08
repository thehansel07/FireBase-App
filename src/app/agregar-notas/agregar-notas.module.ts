import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarNotasPageRoutingModule } from './agregar-notas-routing.module';

import { AgregarNotasPage } from './agregar-notas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarNotasPageRoutingModule
  ],
  declarations: [AgregarNotasPage]
})
export class AgregarNotasPageModule {}
