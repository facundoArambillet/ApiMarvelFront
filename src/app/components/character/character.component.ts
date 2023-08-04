import { Component, Input, inject } from '@angular/core';
import { MarvelCharacter } from 'src/app/models/MarvelCharacter';


@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent {
  @Input() character!: MarvelCharacter;

  image: string = '';
  name: string = '';
  description: string = '';
  comics : string[] = [];
  events : string[] = [];
  series : string[] = [];
  stories : string[] = [];

  loadComics() {
    for(let comic of this.character.comics.items) {
      this.comics.push(comic.name);
    }
  }
  loadEvents() {
    for(let event of this.character.events.items) {
      this.events.push(event.name);
    }
  }
  loadSeries() {
    for(let serie of this.character.series.items) {
      this.series.push(serie.name);
    }
  }
  loadStories() {
    for(let storie of this.character.stories.items) {
      this.stories.push(storie.name);
    }
  }

  ngOnInit() {
    this.image = this.character.thumbnail.path + '.' + this.character.thumbnail.extension;
    this.name = this.character.name;
    this.description = this.character.description
    this.loadComics();
    this.loadEvents();
    this.loadSeries();
    this.loadStories();
  }
}
