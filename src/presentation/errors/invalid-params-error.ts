export class InvalidParamError extends Error {
  constructor(paramName: string) {
    super(`Error param: ${paramName}`);
    this.name = "InvalidParamError";
  }
}
