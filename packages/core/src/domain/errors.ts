export type DomainErrorCode = 'VALIDATION' | 'CONFLICT' | 'NOT_CONFIGURED';

export class DomainError extends Error {
  code: DomainErrorCode;

  constructor(message: string, code: DomainErrorCode = 'VALIDATION') {
    super(message);
    this.code = code;
    this.name = 'DomainError';
  }
}
