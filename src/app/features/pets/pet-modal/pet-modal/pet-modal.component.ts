import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import {SharedModule} from '../../../../shared/shared/shared.module';
import {PacienteDTO} from '../../../../models/paciente/paciente-dto';
import {Especie} from '../../../../models/especie/enum';


@Component({
  selector: 'app-pet-modal',
  standalone: true,
  imports: [CommonModule, SharedModule, FormsModule],
  template: `
    <app-modal
      [isOpen]="isOpen"
      [title]="petSelecionado ? 'Editar Pet' : 'Novo Pet'"
      (close)="onClose()"
      (confirm)="onSalvar(petForm)"
    >
      <form #petForm="ngForm">
        <div class="form-group">
          <label>Nome</label>
          <input
            type="text"
            name="nome"
            [(ngModel)]="modelPet.nome"
            required
          >
        </div>

        <div class="form-group">
          <label>Data de Nascimento</label>
          <input
            type="date"
            name="dataNascimento"
            [(ngModel)]="modelPet.dataNascimento"
            required
          >
        </div>

        <div class="form-group">
          <label>Espécie</label>
          <select
            name="especie"
            [(ngModel)]="modelPet.especie"
            required
          >
            <option *ngFor="let esp of especies" [value]="esp">
              {{ esp }}
            </option>
          </select>
        </div>

        <div class="form-group">
          <label>Raça</label>
          <input
            type="text"
            name="raca"
            [(ngModel)]="modelPet.raca"
            required
          >
        </div>

        <div class="form-group">
          <label>Descrição</label>
          <textarea
            name="descricao"
            [(ngModel)]="modelPet.descricao"
          ></textarea>
        </div>
      </form>
    </app-modal>
  `,
  styles: [`
    .form-group {
      margin-bottom: 15px;
    }
    input, select, textarea {
      width: 100%;
      padding: 8px;
      margin-top: 5px;
    }
  `]
})
export class PetModalComponent {
  @Input() isOpen = false;
  @Input()
  set pet(value: PacienteDTO | null) {
    if (value) {
      this.modelPet = {...value};
    } else {
      this.resetForm();
    }
  }
  @Output() close = new EventEmitter<void>();
  @Output() salvar = new EventEmitter<PacienteDTO>();

  modelPet: PacienteDTO = this.resetForm();
  especies = Object.values(Especie);

  resetForm(): PacienteDTO {
    return {
      nome: '',
      dataNascimento: new Date(),
      especie: Especie.CACHORRO,
      raca: '',
      tutorId: 1 // TODO: Substituir pelo ID do tutor atual
    };
  }

  onClose() {
    this.close.emit();
  }

  onSalvar(form: NgForm) {
    if (form.valid) {
      this.salvar.emit(this.modelPet);
    }
  }
}
