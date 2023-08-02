import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent {
  http = inject(HttpClient);

  loading: boolean = true;
  characters : any[] = [];


  loadCharacters() {
    const email = window.sessionStorage.getItem("email");
    const password = window.sessionStorage.getItem("password");

    if (email && password) {

      const headers = new HttpHeaders({
        'Authorization': 'Basic ' + btoa(email + ':' + password)
      });

      this.http.get<any[]>("http://localhost:8080/app/marvel", { headers: headers, withCredentials: true }).subscribe(
        (data) => {
          console.log(data)
          if (data != null) {
            this.characters = data;
            console.log(this.characters);
          }
          this.loading = false; // Finaliza la carga, establece loading en false
        },
        (error) => {
          console.error("Error en la carga de characters", error);
          this.loading = false; // Finaliza la carga aunque haya ocurrido un error
        }
      );
    } else {
      console.log("Las credenciales no están disponibles en sessionStorage");
      this.loading = false; // Finaliza la carga si no hay credenciales

    }
  }
  ngOnInit() {
    this.loadCharacters();
  }
}
