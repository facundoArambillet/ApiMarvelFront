import { Component, Input, inject } from '@angular/core';


@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent {
  @Input() character: any = {}

  image: string = '';
  name: string = '';

  ngOnInit() {
    this.image = this.character.thumbnail.path + '.' + this.character.thumbnail.extension;
    this.name = this.character.name;
  }
}
