import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../../../shared/shared/shared.module';
import {PetModalComponent} from '../../pet-modal/pet-modal/pet-modal.component';
import {PacienteDTO} from '../../../../models/paciente/paciente-dto';
import {PacienteService} from '../../../../services/paciente/paciente.service';


@Component({
  selector: 'app-pets-list',
  standalone: true,
  imports: [CommonModule, SharedModule, PetModalComponent],
  template: `
    <div class="pets-container">
      <h1>Meus Pets</h1>

      <button (click)="openNovoPetModal()">Adicionar Novo Pet</button>

      <div class="pets-grid">
        <app-card
          *ngFor="let pet of pets"
          [title]="pet.nome"
          [subtitle]="pet.especie"
          [actionButton]="true"
          (action)="editarPet(pet)"
        >
          Raça: {{ pet.raca }}<br>
          Data de Nascimento: {{ pet.dataNascimento | date:'shortDate' }}
        </app-card>
      </div>

      <app-pet-modal
        [isOpen]="modalAberto"
        [pet]="petSelecionado"
        (close)="fecharModal()"
        (salvar)="salvarPet($event)"
      ></app-pet-modal>
    </div>
  `,
  styles: [`
    .pets-container {
      padding: 20px;
    }
    .pets-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 16px;
      margin-top: 20px;
    }
  `]
})
export class PetsListComponent implements OnInit {
  pets: PacienteDTO[] = [];
  modalAberto = false;
  petSelecionado: PacienteDTO | null = null;

  constructor(private pacienteService: PacienteService) {}

  ngOnInit() {
    this.carregarPets();
  }

  carregarPets() {
    this.pacienteService.getPacientes().subscribe(
      pets => this.pets = pets
    );
  }

  openNovoPetModal() {
    this.petSelecionado = null;
    this.modalAberto = true;
  }

  editarPet(pet: PacienteDTO) {
    this.petSelecionado = pet;
    this.modalAberto = true;
  }

  fecharModal() {
    this.modalAberto = false;
    this.petSelecionado = null;
  }

  salvarPet(pet: PacienteDTO) {
    if (this.petSelecionado) {
      // Atualizar pet existente
      this.pacienteService.atualizarPaciente(this.petSelecionado.id!, pet).subscribe(
        () => {
          this.carregarPets();
          this.fecharModal();
        }
      );
    } else {
      // Criar novo pet
      this.pacienteService.criarPaciente(pet).subscribe(
        () => {
          this.carregarPets();
          this.fecharModal();
        }
      );
    }
  }
}
