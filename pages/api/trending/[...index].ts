import nc from "next-connect";
import { NextApiRequest, NextApiResponse } from "next";
import { BeanContainerRegistry } from "@/domain/BeanContainerRegistry";

const apiRoutesHandler = () => {
  const DEFAULT_RESOURCE = "all";
  const DEFAULT_PERIOD = "week";

  const validRoutesByResource = {
    movies: "movie",
    tvshows: "tv",
    persons: "person",
    all: DEFAULT_RESOURCE,
  };

  const validRoutesByPeriod = [DEFAULT_PERIOD, "day"];

  const getValidRoutesByPeriodOrDefault = (period) =>
    validRoutesByPeriod.includes(period) ? period : DEFAULT_PERIOD;

  const getValidRoutesByResourceOrDefault = (path) =>
    validRoutesByResource.hasOwnProperty(path)
      ? validRoutesByResource[path]
      : DEFAULT_RESOURCE;

  const getResourceByQueryParam = (request) => {
    const path = request && request[0];
    return validRoutesByResource[path] ? path : "all";
  };

  const getPeriodByQueryParam = (request) => {
    const period = request && request[1];
    return getValidRoutesByPeriodOrDefault(period);
  };

  return {
    getResourceByQueryParam,
    getPeriodByQueryParam,
    getValidRoutesByPeriodOrDefault,
    getValidRoutesByResourceOrDefault,
  };
};

const routesHandler = apiRoutesHandler();

export const getTrending = async (obj: {
  resource: string;
  period: string;
  language?: string;
}) => {
  const beanContainer = new BeanContainerRegistry().getBeanContainer();
  const getTrendingUseCaseResponse = await beanContainer[
    "getTrendingUseCase"
  ].execute({
    resource: routesHandler.getValidRoutesByResourceOrDefault(obj.resource),
    period: routesHandler.getPeriodByQueryParam(obj.period),
    language: obj.language,
  });
  return getTrendingUseCaseResponse?.data;
};

const handler = nc<NextApiRequest, NextApiResponse>({
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end("Something broke!");
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found");
  },
})
  // .use(someMiddleware())
  .get(async (req, res) => {
    const resource: string = routesHandler.getResourceByQueryParam(
      req.query.index
    );
    const period: string = routesHandler.getPeriodByQueryParam(req.query.index);
    const language: string = Array.isArray(req.query.language)
      ? req.query.language[0]
      : req.query.language;
    const trendingMovies = await getTrending({ resource, period, language });
    res.json(trendingMovies);
  })
  .post(async (req, res) => {
    res.send("Not implemented yet!!");
  })
  .put(async (req, res) => {
    res.end("async/await is also supported!");
  })
  .patch(async (req, res) => {
    throw new Error("Throws me around! Error can be caught and handled.");
  });

export default handler;
