import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { DatabaseService } from 'src/app/services/database.service';

import { FirestorageService } from 'src/app/services/firestorage.service';
import { gasolinera } from 'src/interface/gas.interface';

import { Loader } from '@googlemaps/js-api-loader';

const loader = new Loader({
  apiKey: "",
  version: "weekly",
  libraries: ["places"]
});

const mapOptions = {
  center: {
    lat: 0,
    lng: 0
  },
  zoom: 4
};

@Component({
  selector: 'app-regisgasolinera',
  templateUrl: './regisgasolinera.page.html',
  styleUrls: ['./regisgasolinera.page.scss'],
})
export class RegisgasolineraPage implements OnInit {
  gasolineras: gasolinera[];
  gasolinerasuser: gasolinera[];
  gasolinera: gasolinera = {
    uid: '',
    id:'',
    nombre: '',
    ubicaciontxt: '',
    ubicacionmaps:'',
    foto: '',
    gasolinaver: '',
    gasolinaroj: '',
    diesel: ''
  };
  newFile : any;
  uid : string = '';
  agregar: Boolean = false;

  constructor(private auth : AuthService, private alertController: AlertController,
    private router : Router, private storage: FirestorageService,
    private database: DatabaseService) {
      this.gasolineras =[{
        uid: '',
        id:'',
        nombre: '',
        ubicaciontxt: '',
        ubicacionmaps:'',
        foto: '',
        gasolinaver: '',
        gasolinaroj: '',
        diesel: ''
      }];
      this.gasolinerasuser =[{
        uid: '',
        id:'',
        nombre: '',
        ubicaciontxt: '',
        ubicacionmaps:'',
        foto: '',
        gasolinaver: '',
        gasolinaroj: '',
        diesel: ''
      }];
     }

  async ngOnInit() {
    await this.auth.getUid().then(res=>{
      this.gasolinera.uid = res;
    });

    this.database.getgaso().subscribe(gas => {
      this.gasolineras = gas;
    });



    // Callback
    loader.loadCallback(e => {
      if (e) {
        console.log(e);
      } else {
        new google.maps.Map(document.getElementById("map") as HTMLDivElement , mapOptions);
      }
    });
  }

  submit(){
    this.presentAlert();
  }

  async newImageUpload(event : any){
    if(event.target.files && event.target.files[0]){
      this.newFile = event.target.files[0];
      const reader = new FileReader();
      reader.onload = ((image) => {
        this.gasolinera.foto = image.target?.result as string;
      });
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  async presentAlert(){
    const alert = await this.alertController.create({
      header: 'Esta seguro que desea registrarlo',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
          },
        },
        {
          text: 'Resgistrar',
          role: 'confirm',
          handler: async () => {
            //Hacemos el proceso de subir la foto y guadamos el URL
            this.gasolinera.foto = await this.storage.uploadImage(this.newFile, "fotos", this.gasolinera.uid + this.gasolinera.nombre);

            const response = this.database.agregargas(this.gasolinera).then(res=>{
              this.agregar = false;
              this.gasolinera.uid = '';
              this.gasolinera.nombre = '';
              this.gasolinera.ubicaciontxt = '';
              this.gasolinera.foto = '';
              this.gasolinera.gasolinaver = '';
              this.gasolinera.gasolinaroj = '';
              this.gasolinera.diesel = '';
            });
            console.log(response);
          },
        },
      ],
    });
    await alert.present();
  }

  regresar(){
    this.auth.logout();
    this.router.navigate(['/tabs/tab1']);
  }

  nuevo(){
    this.agregar = true;
  }

  cancelar(){
    this.agregar = false;
  }

}
