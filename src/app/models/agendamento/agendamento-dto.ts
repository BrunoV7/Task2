export interface AgendamentoDTO {
  id?: number;
  dataAgendamento: Date;
  descricao: string;
  pacienteId: number;
  veterinarioId: number;
  procedimentoId: number;
  aprovado: boolean;
  dataCriacao?: Date;
  dataAtualizacao?: Date;
}
