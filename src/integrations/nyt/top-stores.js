import { NYT_API_ROUTES } from '../../constants/nyt/api-routes.js';
import { NYTBase } from './base.js';

export class NYTTopStories extends NYTBase {
  constructor(version) {
    super();
    this.baseUrl = `${this.baseUrl}${NYT_API_ROUTES.TOP_STORIES}/${version}`;
  }

  async findByPage(page) {
    return await this.request(`/${page}.json`);
  }
}
