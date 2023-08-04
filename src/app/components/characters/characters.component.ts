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
  loadingMore: boolean = false;
  characters: MarvelCharacter[] = [];
  limit: number = 10;
  pageNumber: number = 1;

  loadCharacters() {
    const email = window.sessionStorage.getItem("email");
    const password = window.sessionStorage.getItem("password");

    if (email && password) {
      if (this.pageNumber == 1) {
        this.marvelCharacterService.getByLimit(this.limit, this.pageNumber).subscribe(
          (data) => {
            this.characters = data;
            this.loading = false;
          }
        )
      } else {
        this.loadingMore = true;
        this.marvelCharacterService.getByLimit(this.limit, this.pageNumber).subscribe(
          (data) => {
            // for(let character of data) {
            //   this.characters.push(character);
            // }

            //Los 3 puntos(llamado spread operator) hacen lo mismo que el for each de arriba, recorre el array
            //y descompone(los agarra individualmente) sus elementos, haciendo que cuando los pushee sea como un for
            this.characters.push(...data);
            this.loadingMore = false;
          },
          () => {
            this.loadingMore = false;
          }
        );
      }
    } else {
      console.log("Las credenciales no están disponibles en sessionStorage");
      this.loading = false; // Finaliza la carga si no hay credenciales
    }
  }

  onScroll() {
    if (!this.loadingMore) {
      console.log(this.pageNumber);
      this.pageNumber++;
      this.loadCharacters();
    }
  }

  ngOnInit() {
    this.loadCharacters();
  }
}
