import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../../shared/shared/shared.module';
import {AgendamentoDTO} from '../../../models/agendamento/agendamento-dto';
import {AgendamentoService} from '../../../services/agendamento/agendamento.service';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  proximosAgendamentos: AgendamentoDTO[] = [];

  constructor(private agendamentoService: AgendamentoService) {}

  ngOnInit() {
    this.carregarAgendamentos();
  }

  carregarAgendamentos() {
    this.agendamentoService.getAgendamentosTutor()
      .subscribe(agendamentos => {
        this.proximosAgendamentos = agendamentos
          .filter(ag => new Date(ag.dataAgendamento) > new Date());
      });
  }
}
