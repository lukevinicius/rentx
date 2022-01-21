import { Router } from 'express';
import multer from 'multer';

import { CreateCategoryController } from '../../../../modules/cars/useCases/createCategory/CreateCategoryController';
import { ImportCategoryController } from '../../../../modules/cars/useCases/importCategory/ImportCategoryController';
import { ListCategoriesController } from '../../../../modules/cars/useCases/listCategories/ListCategoriesController';
import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const categoriesRoutes = Router();

const uploud = multer({
  dest: './tmp',
});

const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const listCategoriesController = new ListCategoriesController();

categoriesRoutes.post(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  createCategoryController.handle,
);

categoriesRoutes.get('/', listCategoriesController.handle);

categoriesRoutes.post(
  '/import',
  uploud.single('file'),
  ensureAuthenticated,
  ensureAdmin,
  importCategoryController.handle,
);

export { categoriesRoutes };
