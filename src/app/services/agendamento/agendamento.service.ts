import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../enviroment';
import {AgendamentoDTO} from '../../models/agendamento/agendamento-dto';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {
  private apiUrl = `${environment.SERVIDOR}/api/agendamentos`;

  constructor(private http: HttpClient) {}

  // Buscar agendamento por ID
  getAgendamentoById(id: number): Observable<AgendamentoDTO> {
    return this.http.get<AgendamentoDTO>(`${this.apiUrl}/${id}`);
  }

  // Listar agendamentos para veterinário
  getAgendamentosVeterinario(): Observable<AgendamentoDTO[]> {
    return this.http.get<AgendamentoDTO[]>(`${this.apiUrl}/veterinario`);
  }

  // Listar agendamentos para tutor
  getAgendamentosTutor(): Observable<AgendamentoDTO[]> {
    return this.http.get<AgendamentoDTO[]>(`${this.apiUrl}/tutor`);
  }

  // Criar novo agendamento
  criarAgendamento(agendamento: AgendamentoDTO): Observable<AgendamentoDTO> {
    return this.http.post<AgendamentoDTO>(this.apiUrl, agendamento);
  }

  // Aprovar agendamento
  aprovarAgendamento(id: number): Observable<AgendamentoDTO> {
    return this.http.put<AgendamentoDTO>(`${this.apiUrl}/${id}/aprovar`, {});
  }

  // Remover agendamento
  removerAgendamento(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
