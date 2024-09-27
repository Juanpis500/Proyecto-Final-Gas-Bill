import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAuth,getAuth } from "@angular/fire/auth";
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from 'src/environments/environment';
import { GasolinerasPipe } from './pages/gasolineras.pipe';
import { provideFirestore } from '@angular/fire/firestore';
import { getFirestore } from 'firebase/firestore';


@NgModule({
  declarations: [AppComponent, GasolinerasPipe],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
  provideFirebaseApp(()=> initializeApp(environment.firebaseConfig)),
  provideAuth(() => getAuth()),
  provideFirestore(()=> getFirestore())],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
