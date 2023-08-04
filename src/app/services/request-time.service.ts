import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RequestTime } from '../models/RequestTime';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestTimeService {
  private email: string = window.sessionStorage.getItem("email") ?? "";
  private password: string = window.sessionStorage.getItem("password") ?? "";
  
  constructor(private http: HttpClient) { }

  public getAll(): Observable<RequestTime[]> {
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa(this.email + ':' + this.password)
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
