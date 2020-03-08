import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModificarNotasPage } from './modificar-notas.page';

const routes: Routes = [
  {
    path: '',
    component: ModificarNotasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModificarNotasPageRoutingModule {}
