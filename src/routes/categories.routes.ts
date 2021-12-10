import { Router } from 'express';
import multer from 'multer';

import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { importCategoryController } from '../modules/cars/useCases/importCategory';
import { listCategoriesController } from '../modules/cars/useCases/listCategories';

const categoriesRoutes = Router();

const uploud = multer({
  dest: './tmp',
});

categoriesRoutes.post('/', (Request, Response) => {
  return createCategoryController.handle(Request, Response);
});

categoriesRoutes.get('/', (Request, Response) => {
  return listCategoriesController.handle(Request, Response);
});

categoriesRoutes.post('/import', uploud.single('file'), (Request, Response) => {
  return importCategoryController.handle(Request, Response);
});

export { categoriesRoutes };
