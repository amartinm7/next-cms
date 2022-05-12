/* eslint-disable camelcase, no-console */
class GetLatestTvShowUseCase {
  constructor({ getLatestTvShowService }) {
    this._getLatestTvShowService = getLatestTvShowService;
  }

  async execute() {
    return this._getLatestTvShowService.execute({ language: "es-ES" });
  }
}

export { GetLatestTvShowUseCase };
