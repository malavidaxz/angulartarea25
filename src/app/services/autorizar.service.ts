import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AutorizarService {

  constructor(private auth:Auth) { }

  registrar({email,password} : any){
    return createUserWithEmailAndPassword(this.auth, email, password); //recibe un objeto con email y password para crear un usuario con esos datos.
  }

  login({email,password}:any){
    return signInWithEmailAndPassword(this.auth, email, password); //recibe un objeto con email y password para iniciar sesión con esos datos.
  }

  logout(){
    return signOut(this.auth); // para cerrar sesión.
  }
}
