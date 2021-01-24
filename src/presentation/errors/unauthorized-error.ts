export class Unauthorized extends Error {
  constructor(stack?: string) {
    super("Unauthorized");
    this.message = "UnauthorizedError";
  }
}
