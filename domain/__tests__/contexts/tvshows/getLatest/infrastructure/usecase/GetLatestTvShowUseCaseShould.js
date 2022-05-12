import { BeanContainerRegistry } from "@/domain/BeanContainerRegistry";
import { GetLatestTvShowRepository } from "@/domain/contexts/tvshows/getLatest/infrastructure/repository/GetLatestTvShowRepository";
import * as mockTvShowLatest from "./mockTvShowLatest.json" assert { type: "json" };

console.log("welcome! GetTvShowsVideosController test");

describe("BeanContainerRegistry", function () {
  const beanContainer = new BeanContainerRegistry().getBeanContainer();
  describe("execute", function () {
    const mockGetLatestTvShowRepository = jest.fn();
    GetLatestTvShowRepository.prototype.execute = mockGetLatestTvShowRepository;
    mockGetLatestTvShowRepository.mockReturnValue(
      Promise.resolve(mockTvShowLatest)
    );
    it("should save", async function () {
      const result = await beanContainer.getLatestTvShowUseCase.execute();
      expect(mockTvShowLatest).toEqual(result);
    });
  });
});
