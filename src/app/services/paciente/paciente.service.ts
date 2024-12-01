import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../enviroment';
import {PacienteDTO} from '../../models/paciente/paciente-dto';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  private apiUrl = `${environment.SERVIDOR}/pacientes`;

  constructor(private http: HttpClient) {}

  // Listar todos os pacientes
  getPacientes(): Observable<PacienteDTO[]> {
    return this.http.get<PacienteDTO[]>(this.apiUrl);
  }

  // Buscar paciente por ID
  getPacienteById(id: number): Observable<PacienteDTO> {
    return this.http.get<PacienteDTO>(`${this.apiUrl}/${id}`);
  }

  // Criar novo paciente
  criarPaciente(paciente: PacienteDTO): Observable<PacienteDTO> {
    return this.http.post<PacienteDTO>(this.apiUrl, paciente);
  }

  // Atualizar paciente
  atualizarPaciente(id: number, paciente: PacienteDTO): Observable<PacienteDTO> {
    return this.http.put<PacienteDTO>(`${this.apiUrl}/${id}`, paciente);
  }

  // Remover paciente
  removerPaciente(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
