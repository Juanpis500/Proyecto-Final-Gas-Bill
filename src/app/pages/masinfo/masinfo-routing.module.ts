import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MasinfoPage } from './masinfo.page';

const routes: Routes = [
  {
    path: '',
    component: MasinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MasinfoPageRoutingModule {}
