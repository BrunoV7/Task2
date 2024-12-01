export interface PacienteDTO {
  id?: number;
  nome: string;
  dataNascimento: Date;
  especie: string;
  raca: string;
  descricao?: string;
  dataCriacao?: Date;
  dataAtualizacao?: Date;
  tutorId: number;
}
