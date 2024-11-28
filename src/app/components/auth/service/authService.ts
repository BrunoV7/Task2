import {Component, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Login} from '../models/Login';
import {Observable} from 'rxjs';
import {AuxToken} from '../models/AuxToken';
@Injectable({
  providedIn: 'root' // This makes the service available application-wide
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/auth/login'; // URL base de login

  constructor(private http: HttpClient) {}
  login(loginData: Login): Observable<AuxToken> {
    return this.http.post<AuxToken>(this.apiUrl, loginData);
  }
}
