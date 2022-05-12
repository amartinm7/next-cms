/* eslint-disable camelcase, no-console */
class GetTrendingUseCase {
  constructor({ getTrendingService }) {
    this._getTrendingService = getTrendingService;
  }

  async execute() {
    return this._getTrendingService.execute({ language: "es-ES" });
  }
}

export { GetTrendingUseCase };
