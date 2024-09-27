import { Injectable } from '@angular/core';
import { collectionData, Firestore, doc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from '@firebase/util';
import { collection, addDoc } from 'firebase/firestore';
import { gasolinera, promocion } from 'src/interface/gas.interface';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private firestore: Firestore) { }

  agregargas(gasolinera: gasolinera){
    const gasRef = collection(this.firestore,'gasolinera');
    return addDoc(gasRef, gasolinera);
  }

  getgaso(): Observable<gasolinera[]>{
    const gasRef = collection(this.firestore,'gasolinera');
    return collectionData(gasRef, { idField: 'id' }) as unknown as Observable<gasolinera[]>;
  }

  getprom(): Observable<promocion[]>{
    const gasRef = collection(this.firestore,'Promociones');
    return collectionData(gasRef, { idField: 'id' }) as unknown as Observable<promocion[]>;
  }

}
