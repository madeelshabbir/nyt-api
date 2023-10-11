import { UnprocessableEntityError } from '../errors/unprocessable-entity-error.js';
import { NYTTopStories } from '../integrations/nyt/top-stores.js';

export const TopStoriesController = {
  index: async (req, res, next) => {
    try {
      const { version, page } = req.params;

      const { data } = await new NYTTopStories(version).findByPage(page);

      res.json(data);
    } catch (err) {
      next(err);
    }
  },
};
