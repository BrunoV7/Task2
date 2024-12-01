import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../enviroment';
import {TutorDTO} from '../../models/tutor/tutor-dto';

@Injectable({
  providedIn: 'root'
})
export class TutorService {
  private apiUrl = `${environment.SERVIDOR}/tutores`;

  constructor(private http: HttpClient) {}

  // Listar todos os tutores
  getTutores(): Observable<TutorDTO[]> {
    return this.http.get<TutorDTO[]>(this.apiUrl);
  }

  // Buscar tutor por ID
  getTutorById(id: number): Observable<TutorDTO> {
    return this.http.get<TutorDTO>(`${this.apiUrl}/${id}`);
  }

  // Criar novo tutor
  criarTutor(tutor: TutorDTO): Observable<TutorDTO> {
    return this.http.post<TutorDTO>(this.apiUrl, tutor);
  }

  // Atualizar tutor
  atualizarTutor(id: number, tutor: TutorDTO): Observable<TutorDTO> {
    return this.http.put<TutorDTO>(`${this.apiUrl}/${id}`, tutor);
  }

  // Remover tutor
  removerTutor(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
