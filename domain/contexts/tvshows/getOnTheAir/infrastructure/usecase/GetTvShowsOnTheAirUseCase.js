/* eslint-disable camelcase, no-console */
class GetTvShowsOnTheAirUseCase {
  constructor({ getTvShowsOnTheAirService }) {
    this._getTvShowsOnTheAirService = getTvShowsOnTheAirService;
  }

  async execute() {
    return this._getTvShowsOnTheAirService.execute({ language: "es-ES" });
  }
}

export { GetTvShowsOnTheAirUseCase };
