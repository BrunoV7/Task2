import {AgendamentoDTO} from '../agendamento/agendamento-dto';

export interface VeterinarioDTO {
  id?: number;
  nome: string;
  cpf: string;
  email: string;
  crm: string;
  dataCadastro?: Date;
  dataAtualizacao?: Date;
  agendamentos?: AgendamentoDTO[];
  rua?: string;
  bairro?: string;
  numero?: string;
  cidade?: string;
  estado?: string;
  cep?: string;
}
