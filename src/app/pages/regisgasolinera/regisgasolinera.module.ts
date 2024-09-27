import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisgasolineraPageRoutingModule } from './regisgasolinera-routing.module';

import { RegisgasolineraPage } from './regisgasolinera.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisgasolineraPageRoutingModule
  ],
  declarations: [RegisgasolineraPage]
})
export class RegisgasolineraPageModule {}
