import { Component, inject } from '@angular/core';
import { RequestTime } from 'src/app/models/RequestTime';
import { RequestTimeService } from 'src/app/services/request-time.service';

@Component({
  selector: 'app-request-time',
  templateUrl: './request-time.component.html',
  styleUrls: ['./request-time.component.css']
})
export class RequestTimeComponent {
  requestTimeService = inject(RequestTimeService);
  loading: boolean = true;
  requestsTime : RequestTime[] = [];

  loadRequests() {
    const email = window.sessionStorage.getItem("email");
    const password = window.sessionStorage.getItem("password");

    if (email && password) {
      this.requestTimeService.getAll(email,password).subscribe(
        (data) => {
          this.requestsTime = data;
          this.loading = false;
        }
      )
      
    } else {
      console.log("Las credenciales no están disponibles en sessionStorage");
      this.loading = false;
    }
  }

  ngOnInit() {
    this.loadRequests();
  }
}
