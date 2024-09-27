import { Component } from '@angular/core';
import { promocion } from 'src/interface/gas.interface';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  promociones: promocion[];

  constructor(private database: DatabaseService) {
    this.promociones=[{
      uid: '',
      titulo: '',
      subtitulo: '',
      descripcion: '',
      img: ''
    }];
  }

  ngOnInit(){
    this.database.getprom().subscribe(prom => {
      this.promociones = prom;
    });
  }

}
