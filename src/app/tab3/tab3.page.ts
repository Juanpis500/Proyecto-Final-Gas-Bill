import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  registro = {
    correo:'',
    password: ''
  };
  handlerMessage = '';
  roleMessage = '';
  constructor(private auth : AuthService, private alertController: AlertController,
    private router : Router) {}

  accesoexito : Boolean = false;

  submit(){
    
    console.log("si entramos");
    this.auth.login(this.registro.correo,this.registro.password)
    .then(response => {
      console.log(response);
      this.presentAlert();
    }).catch(error => console.log(error));
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Inicio de Sesion exitoso',
      buttons: [
        {
          text: 'Continuar',
          role: 'Continuar',
          handler: () => {
            console.log("despues");
            this.router.navigate(['/regisgasolinera']);
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }

}
