import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private auth: Auth) { }

  login(email: string, password: string){
    return signInWithEmailAndPassword(this.auth,email, password);
  }

  async getUid(){
    const user = await this.auth.currentUser;
    if(user == null){
      return ''
    }else{
      return user.uid;
    }
  }

  logout(){
    this.auth.signOut();
  }

}
