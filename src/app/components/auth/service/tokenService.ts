import {Component, inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { jwtDecode,JwtPayload} from 'jwt-decode';
import {AppComponent} from '../../../app.component';
@Injectable({
  providedIn: 'root' // This makes the service available application-wide
})
export class tokenService{

  appComponent = inject(AppComponent)

  setToken(token: string) {
    this.appComponent.isLoggedIn = !this.appComponent.isLoggedIn;
    console.log(this.appComponent.isLoggedIn);
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  jwtDecode() {
    let token = this.getToken();
    if (token) {
      return jwtDecode<JwtPayload>(token);
    }
    return "";
  }

  getUserInfoFromToken(token: string) {
    try {
      const decoded: any = this.jwtDecode();

      if (decoded) {
        const userName = decoded.name;
        const userEmail = decoded.email;

        console.log('Nome do Usuário:', userName);
        console.log('Email do Usuário:', userEmail);

        return { userName, userEmail };
      } else {
        console.error('Token inválido ou sem payload decodificável');
        return null;
      }
    } catch (error) {
      console.error('Erro ao decodificar o token:', error);
      return null;
    }
  }

}
