import { Router } from 'express';

import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { listCategoriesController } from '../modules/cars/useCases/listCategories';

const categoriesRoutes = Router();

categoriesRoutes.post('/', (Request, Response) => {
  return createCategoryController.handle(Request, Response);
});

categoriesRoutes.get('/', (Request, Response) => {
  return listCategoriesController.handle(Request, Response);
});

export { categoriesRoutes };
