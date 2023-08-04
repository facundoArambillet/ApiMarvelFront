import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import User from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  private http = inject(HttpClient);
  private router = inject(Router)

  constructor() { }

  login(userForm : User) {

    // Configuro las opciones de la solicitud con el encabezado 'Origin'(No me funciono)
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //     'Origin': 'http://localhost:4200' // Agrego el origen
    //   }),
    // };
    // Agregue allowCredentials a la config del CORS en el backend
    this.http.post<User>('http://localhost:8080/app/auth', userForm, { withCredentials: true }).subscribe(
      (data) => {
        if (data != null) {
          window.sessionStorage.setItem("email", data.email);
          window.sessionStorage.setItem("password", data.password);
          this.router.navigate(["/characters"]);
        }

      },
      (error) => {
        console.log("Usuario incorrecto");
      }
    );
  }
}
