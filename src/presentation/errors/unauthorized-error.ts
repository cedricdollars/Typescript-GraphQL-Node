export class Unauthorized extends Error {
  constructor(stack?: string) {
    super(stack);
    this.message = "Unauthorized";
  }
}
