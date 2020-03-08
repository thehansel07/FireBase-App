import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificarNotasPageRoutingModule } from './modificar-notas-routing.module';

import { ModificarNotasPage } from './modificar-notas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificarNotasPageRoutingModule
  ],
  declarations: [ModificarNotasPage]
})
export class ModificarNotasPageModule {}
