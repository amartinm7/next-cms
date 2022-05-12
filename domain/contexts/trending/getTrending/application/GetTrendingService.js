/* eslint-disable camelcase, no-console */
class GetTrendingService {
  constructor({ getTrendingRepository }) {
    this._getTrendingRepository = getTrendingRepository;
  }

  async execute({ language }) {
    return await this._getTrendingRepository.execute({ language });
  }
}

export { GetTrendingService };
