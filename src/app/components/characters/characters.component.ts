import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { MarvelCharacter } from 'src/app/models/MarvelCharacter';
import { MarvelCharacterService } from 'src/app/services/marvel-character.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent {
  marvelCharacterService = inject(MarvelCharacterService);
  loading: boolean = true;
  characters : MarvelCharacter[] = [];


  loadCharacters() {
    const email = window.sessionStorage.getItem("email");
    const password = window.sessionStorage.getItem("password");

    if (email && password) {
      this.marvelCharacterService.getAll(email,password).subscribe(
        (data) => {
          this.characters = data;
          this.loading = false;
        }
      )
      
    } else {
      console.log("Las credenciales no están disponibles en sessionStorage");
      this.loading = false; // Finaliza la carga si no hay credenciales

    }
  }
  ngOnInit() {
    this.loadCharacters();
  }
}
