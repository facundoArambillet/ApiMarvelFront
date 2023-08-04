import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RequestTime } from '../models/RequestTime';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestTimeService {
  constructor(private http: HttpClient) { }

  public getAll(email: string, password: string): Observable<RequestTime[]> {
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa(email + ':' + password)
    });

    const url = "http://localhost:8080/app/time";

    return new Observable<RequestTime[]>((observer) => {
      this.http.get<RequestTime[]>(url, { headers: headers, withCredentials: true }).subscribe(
        (data) => {
          if (data != null) {
            observer.next(data);
          }
          observer.complete();
        },
        (error) => {
          console.error("Error en la carga de RequestTime", error);
          observer.error(error);
        }
      );
    });
  }
}
