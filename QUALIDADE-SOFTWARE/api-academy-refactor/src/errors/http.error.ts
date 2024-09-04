export class HttpError extends Error {
  public statusCode: number;

  constructor(messageError: string, code: number) {
    super(messageError);
    this.statusCode = code;
  }
}
