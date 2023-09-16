export class ShikimoriError extends Error {
  response: Response | null;

  constructor(message: string, response: Response | null) {
    super(message);
    this.response = response;
  }
}
