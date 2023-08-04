import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MarvelCharacter } from '../models/MarvelCharacter';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarvelCharacterService {
  private email: string = window.sessionStorage.getItem("email") ?? "";
  private password: string = window.sessionStorage.getItem("password") ?? "";

  constructor(private http: HttpClient) { }

  public getAll(): Observable<MarvelCharacter[]> {
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa(this.email + ':' + this.password)
    });

    return this.http.get<MarvelCharacter[]>("http://localhost:8080/app/marvel", { headers: headers, withCredentials: true });
  }

  public getByLimit(limit: number, pageNumber: number): Observable<MarvelCharacter[]> {
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa(this.email + ':' + this.password)
    });

    return this.http.get<MarvelCharacter[]>(`http://localhost:8080/app/marvel/limit?limit=${limit}&pageNumber=${pageNumber}`, { headers: headers, withCredentials: true });
  }
}
