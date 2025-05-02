export class APIError extends Error {
  constructor(
    readonly message: string,
    readonly response: Response | null,
  ) {
    super(message);
  }
}
