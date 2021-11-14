import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Lazy loading -> carrega os componentes sobre demanda
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((modulo) => {
      return modulo.HomeModule;
    }),
  },
  {
    path: 'animais',
    loadChildren: () => import('./animais/animais.module').then((modulo) => {
      return modulo.AnimaisModule;
    })
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
