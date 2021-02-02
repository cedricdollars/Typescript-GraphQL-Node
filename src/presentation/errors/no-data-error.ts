export class NoDataError extends Error {
  constructor() {
    super("Aucune donnée!");
    this.name = "NoDataFound";
  }
}
