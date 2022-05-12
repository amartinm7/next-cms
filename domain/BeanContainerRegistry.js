import { BeanContainer } from "./BeanContainer";
import { GetLatestTvShowProvider } from "./contexts/tvshows/getLatest/GetLatestTvShowProvider";
import { GetTvShowsOnTheAirProvider } from "./contexts/tvshows/getOnTheAir/GetTvShowsOnTheAirProvider";
import { GetConfigurationProvider } from "./helpers/config/GetConfigurationProvider";

class BeanContainerRegistry {
  constructor() {
    this._beanContainer = new BeanContainer();
    new GetConfigurationProvider(this._beanContainer);
    new GetLatestTvShowProvider(this._beanContainer);
    new GetTvShowsOnTheAirProvider(this._beanContainer);
  }

  getBeanContainer() {
    return this._beanContainer;
  }
}

export { BeanContainerRegistry };
