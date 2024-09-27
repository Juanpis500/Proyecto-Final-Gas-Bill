import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { gasolinera } from 'src/interface/gas.interface';

@Component({
  selector: 'app-masinfo',
  templateUrl: './masinfo.page.html',
  styleUrls: ['./masinfo.page.scss'],
})
export class MasinfoPage implements OnInit {

  gasolinera: gasolinera={
    uid: '',
    id: '',
    nombre: '',
    ubicaciontxt : '',
    ubicacionmaps: '',
    foto: '',
    gasolinaver: '',
    gasolinaroj: '',
    diesel: ''
  };

  constructor(public captura:ActivatedRoute, private router:Router) { 
    this.gasolinera.nombre = this.captura.snapshot.params['nombre'];
    this.gasolinera.ubicaciontxt = this.captura.snapshot.params['ubicaciontxt'];
    this.gasolinera.foto = this.captura.snapshot.params['foto'];
    this.gasolinera.gasolinaver = this.captura.snapshot.params['gasolinaver'];
    this.gasolinera.gasolinaroj = this.captura.snapshot.params['gasolinaroj'];
    this.gasolinera.diesel = this.captura.snapshot.params['diesel'];
  }

  ngOnInit() {
  }

  regresar(){
    this.router.navigate(['/tabs/tab1']);
  }

}
