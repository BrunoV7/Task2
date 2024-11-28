import { Component } from '@angular/core';
import {Login} from '../models/Login';
import {AuxToken} from '../models/AuxToken';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../service/authService';
import {tokenService} from '../service/tokenService';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login2',
  imports: [
    FormsModule
  ],
  templateUrl: './login2.component.html',
  standalone: true,
  styleUrl: './login2.component.css'
})
export class Login2Component {
  _login!: Login;
  token!: AuxToken;
  username!: string;
  password!: string;
  constructor(private http: HttpClient, private authService: AuthService, private tokenService: tokenService, private router: Router) {

  }

  login() {
    this._login = new Login(this.username, this.password);
    if(this._login != null) {
      this.authService.login(this._login).subscribe(
        (response) => {
          this.tokenService.setToken(response.access_token);
          this.router.navigate(['/user/dashboard']);
        },
        (error) => {
          console.error('Erro ao obter token:', error);
        }
      );
    }
  }

}
