import nc from "next-connect";
import { BeanContainerRegistry } from "@/domain/BeanContainerRegistry";

const users = [{ id: 1 }, { id: 2 }, { id: 3 }];

function someMiddleware() {
  return {};
}

export const getTrendingMovies = async () => {
  const beanContainer = new BeanContainerRegistry().getBeanContainer();
  const getTrendingUseCaseResponse = await beanContainer[
    "getTrendingUseCase"
  ].execute();
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
    const trendingMovies = await getTrendingMovies();
    res.json(trendingMovies);
  })
  .post(async (req, res) => {
    const trendingMovies = await getTrendingMovies();
    res.send("Not implemented yet!!");
  })
  .put(async (req, res) => {
    res.end("async/await is also supported!");
  })
  .patch(async (req, res) => {
    throw new Error("Throws me around! Error can be caught and handled.");
  });

export default handler;
