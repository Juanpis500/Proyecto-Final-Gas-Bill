import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { gasolinera } from 'src/interface/gas.interface';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  gasolineras: gasolinera[];

  constructor(private database: DatabaseService, private router:Router) {
    this.gasolineras =[{
      uid: '',
      id: '',
      nombre: '',
      ubicaciontxt: '',
      ubicacionmaps:'',
      foto: '',
      gasolinaver: '',
      gasolinaroj: '',
      diesel: ''
    }];
  }

  ngOnInit(){
    this.database.getgaso().subscribe(gas => {
      this.gasolineras = gas;
    });
  }

  abrirmasinfo(gas: gasolinera){
    this.router.navigate(['/masinfo',gas]);
  }
  
}
