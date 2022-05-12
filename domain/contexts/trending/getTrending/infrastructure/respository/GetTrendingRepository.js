class GetTrendingRepository {
  constructor({ axios, axiosRequest }) {
    this._axios = axios;
    this._axiosRequest = axiosRequest;
  }

  /**
   * Get trending all, movies, tv show for day or week
   * @param getTrendingRepositoryRequest
   * @returns {*}
   */
  async execute({ language }) {
    const urlPath = `/trending/all/week?language=${language}&region=ES&release_date.gte=2016-11-16&append_to_response=images,credits,keywords,reviews,videos`;
    const response = await this._axios(this._axiosRequest.getRequest(urlPath));
    console.log(JSON.stringify(response.data));
    return response;
  }
}

export { GetTrendingRepository };
