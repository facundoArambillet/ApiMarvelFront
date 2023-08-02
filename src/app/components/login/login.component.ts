import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import User from 'src/app/models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  http = inject(HttpClient);
  router = inject(Router)

  login(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;

    let userForm = {
      email: email,
      password: password,
    };

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
          window.sessionStorage.setItem("email",data.email);
          window.sessionStorage.setItem("password",data.password);
          this.router.navigate(["/characters"]);
        }
         
      },
      (error) => {
        console.log("Usuario incorrecto");
      }
    );


  }
}
