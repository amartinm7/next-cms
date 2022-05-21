const DEFAULT_RESOURCE = "all";
const DEFAULT_PERIOD = "week";

const validRoutesByResource = {
  movies: "movie",
  tvshows: "tv",
  persons: "person",
  all: DEFAULT_RESOURCE,
};

const validRoutesByPeriod = [DEFAULT_PERIOD, "day"];

/* eslint-disable camelcase, no-console */
class GetTrendingUseCase {
  constructor({ getTrendingService }) {
    this._getTrendingService = getTrendingService;
  }
  _getResourceQueryParam = (request) => {
    const path = request && request[0];
    return validRoutesByResource[path] ?? DEFAULT_RESOURCE;
  };

  _getPeriodQueryParam = (request) => {
    const period = request && request[1];
    return validRoutesByPeriod.includes(period) ? period : DEFAULT_PERIOD;
  };

  async execute(request) {
    return this._getTrendingService.execute({
      resource: this._getResourceQueryParam(request),
      period: this._getPeriodQueryParam(request),
      language: "es-ES",
    });
  }
}

export { GetTrendingUseCase };
