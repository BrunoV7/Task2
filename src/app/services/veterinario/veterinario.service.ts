import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../enviroment';
import {VeterinarioDTO} from '../../models/veterinario/veterinario-dto';


@Injectable({
  providedIn: 'root'
})
export class VeterinarioService {
  private apiUrl = `${environment.SERVIDOR}/veterinarios`;

  constructor(private http: HttpClient) {}

  // Listar todos os veterinários
  getVeterinarios(): Observable<VeterinarioDTO[]> {
    return this.http.get<VeterinarioDTO[]>(this.apiUrl);
  }

  // Buscar veterinário por ID
  getVeterinarioById(id: number): Observable<VeterinarioDTO> {
    return this.http.get<VeterinarioDTO>(`${this.apiUrl}/${id}`);
  }

  // Criar novo veterinário
  criarVeterinario(veterinario: VeterinarioDTO): Observable<VeterinarioDTO> {
    return this.http.post<VeterinarioDTO>(this.apiUrl, veterinario);
  }

  // Atualizar veterinário
  atualizarVeterinario(id: number, veterinario: VeterinarioDTO): Observable<VeterinarioDTO> {
    return this.http.put<VeterinarioDTO>(`${this.apiUrl}/${id}`, veterinario);
  }

  // Remover veterinário
  removerVeterinario(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
