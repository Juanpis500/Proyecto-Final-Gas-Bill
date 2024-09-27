import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisgasolineraPage } from './regisgasolinera.page';

const routes: Routes = [
  {
    path: '',
    component: RegisgasolineraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisgasolineraPageRoutingModule {}
