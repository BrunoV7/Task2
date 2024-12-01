import {PacienteDTO} from '../paciente/paciente-dto';

export interface TutorDTO {
  id?: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  pacientes?: PacienteDTO[];
}
