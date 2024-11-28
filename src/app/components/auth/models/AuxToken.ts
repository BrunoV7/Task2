export class AuxToken {
  access_token!: string;
  expiresIn!: number;
  refreshExpiresIn!: number;
  refreshToken!: string | null;
  tokenType!: string | null;
  notBeforePolicy!: number;
  sessionState!: string | null;
  scope!: string;
}
