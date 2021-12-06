import { Router } from 'express';

import { CategoriesRepository } from '../repositories/CategoriesRepository';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post('/', (Request, Response) => {
  const { name, description } = Request.body;

  categoriesRepository.create({ name, description });

  Response.status(201).send();
});

export { categoriesRoutes };
