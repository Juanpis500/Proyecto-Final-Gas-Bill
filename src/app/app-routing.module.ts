import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'regisgasolinera',
    loadChildren: () => import('./pages/regisgasolinera/regisgasolinera.module').then( m => m.RegisgasolineraPageModule)
  },
  {
    path: 'masinfo',
    loadChildren: () => import('./pages/masinfo/masinfo.module').then( m => m.MasinfoPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
