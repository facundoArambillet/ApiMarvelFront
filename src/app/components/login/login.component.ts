import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  private loginService = inject(LoginService);

  public login(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;

    let userForm = {
      email: email,
      password: password,
    };

    this.loginService.login(userForm);

  }
}
