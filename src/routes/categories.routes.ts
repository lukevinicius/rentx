import { Router } from 'express';

import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository';
import { createCategoryController } from '../modules/cars/useCases/createCategory';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post('/', (Request, Response) => {
  return createCategoryController.handle(Request, Response);
});

categoriesRoutes.get('/', (Request, Response) => {
  const all = categoriesRepository.list();

  Response.status(201).json(all);
});

export { categoriesRoutes };
