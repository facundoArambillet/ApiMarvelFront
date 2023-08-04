import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MarvelCharacter } from '../models/MarvelCharacter';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarvelCharacterService {
  constructor(private http: HttpClient) { }

  public getAll(email: string, password: string): Observable<MarvelCharacter[]> {
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa(email + ':' + password)
    });

    return this.http.get<MarvelCharacter[]>("http://localhost:8080/app/marvel", { headers: headers, withCredentials: true });
  }
}
