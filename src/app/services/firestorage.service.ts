import { Injectable } from '@angular/core';
import { ref } from '@angular/fire/storage';
import { getDownloadURL, getStorage, uploadBytes } from 'firebase/storage';

@Injectable({
  providedIn: 'root'
})
export class FirestorageService {

  constructor() { }

  uploadImage( file: any, path : string, nombre: string): Promise<string>{
    return new Promise (async resolve => {
      const filePath = path + '/' + nombre;
      const storage = getStorage(); 
      const imgref = ref(storage, `${filePath}`);
      const task = await uploadBytes(imgref, file).then(x=>{
        console.log(x);
      }).catch(error => console.log("UploadImage -> " + error));
      
      getDownloadURL(ref(storage, filePath))
        .then(url =>{const imgurl = url; 
          resolve(imgurl); 
          return;})
        .catch(err => { console.log("error al descargar -> ", err)});

    });
    
  }

}
