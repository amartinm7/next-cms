import nc from "next-connect";
import { BeanContainerRegistry } from "@/domain/BeanContainerRegistry";

const users = [{ id: 1 }, { id: 2 }, { id: 3 }];

function someMiddleware() {
  return {};
}

const DEFAULT_RESOURCE = "all";
const DEFAULT_PERIOD = "week";

const validRoutesByResource = {
  movies: "movie",
  tvshows: "tv",
  persons: "person",
  all: DEFAULT_RESOURCE,
};

const validRoutesByPeriod = [DEFAULT_PERIOD, "day"];

const getResourceQueryParam = (request) => {
  const path = request && request[0];
  return validRoutesByResource[path] ?? DEFAULT_RESOURCE;
};

const getPeriodQueryParam = (request) => {
  const period = request && request[1];
  return validRoutesByPeriod.includes(period) ? period : DEFAULT_PERIOD;
};

export const getTrending = async ({ resource, period, language }) => {
  const beanContainer = new BeanContainerRegistry().getBeanContainer();
  const getTrendingUseCaseResponse = await beanContainer[
    "getTrendingUseCase"
  ].execute({ resource, period, language });
  return getTrendingUseCaseResponse?.data;
};

const handler = nc({
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
    const resource = getResourceQueryParam(req.query.index);
    const period = getPeriodQueryParam(req.query.index);
    const language = req.query.language;
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
