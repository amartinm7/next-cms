import { BeanContainerRegistry } from "@/domain/BeanContainerRegistry";
import * as mockResponse from "./mockResponse.json" assert { type: "json" };
import { GetTrendingRepository } from "@/domain/contexts/trending/getTrending/infrastructure/respository/GetTrendingRepository";

console.log("welcome! GetTrendingUseCaseShould test");

describe("GetTrendingUseCaseShould", function () {
  const beanContainer = new BeanContainerRegistry().getBeanContainer();
  describe("execute", function () {
    const mockRepository = jest.fn();
    GetTrendingRepository.prototype.execute = mockRepository;
    mockRepository.mockReturnValue(Promise.resolve(mockResponse));
    it("should return the trending movies and tvshows", async function () {
      const result = await beanContainer.getTrendingUseCase.execute();
      expect(mockResponse).toEqual(result);
    });
  });
});
