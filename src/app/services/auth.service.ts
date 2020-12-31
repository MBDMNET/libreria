import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { UserModel } from '../models/user.models';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  private url ="https://identitytoolkit.googleapis.com/v1/";
  private apkey="AIzaSyCG0u1Zgw-g-DBC01SnCvcrvgAdihP-KrY";
  //CRear Nuevo Usuario
  //https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  //Iniciar Sesion (login)
  //https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]
  constructor(private http:HttpClient) { }
  private urlHttp=this.url+'/accounts:signUp?key='+this.apkey;
  logOut(){

  }

  login(user:UserModel){
    const authData={

      email:user.email,
      password:user.password,    
      returnSecureToken:true

    }
    return this.http.post(
      `${this.url}accounts:signInWithPassword?key=${this.apkey}`,authData
    );
  }

  newUser(user:UserModel){
    const authData={

      email:user.email,
      password:user.password,    
      returnSecureToken:true

    }
      console.log(this.urlHttp);
    return this.http.post(
      `${this.url}accounts:signUp?key=${this.apkey}`,authData
    );
  }
}
