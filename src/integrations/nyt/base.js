import axios from 'axios';

import { NYT_API_BASE_URL, NYT_API_KEY } from '../../constants/environment-variables.js';
import { UnprocessableEntityError } from '../../errors/unprocessable-entity-error.js';
import { DEFAULT_REQUEST_METHOD } from '../../constants/defaults.js';

export class NYTBase {
  constructor() {
    this.baseUrl = NYT_API_BASE_URL;
  }

  async request(route, method = DEFAULT_REQUEST_METHOD, params= {}) {
    console.log(this.BASE_URL + route);
    try {
      const response = await axios.request({
        method,
        url: this.baseUrl + route,
        params: {
          'api-key': NYT_API_KEY,
          ...params,
        },
      });

      return response;
    } catch (err) {
      throw new UnprocessableEntityError(
        err.response?.data.fault.faultstring ||
        'Unable to connect to The New York Times API'
      );
    }
  }
}
