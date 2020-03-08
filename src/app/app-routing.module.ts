import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'agregar-notas',
    loadChildren: () => import('./agregar-notas/agregar-notas.module').then( m => m.AgregarNotasPageModule)
  },
  {
    path: 'ver-notas/:id',
    loadChildren: () => import('./ver-notas/ver-notas.module').then( m => m.VerNotasPageModule)
  },
  {
    path: 'modificar-notas/:id',
    loadChildren: () => import('./modificar-notas/modificar-notas.module').then( m => m.ModificarNotasPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
