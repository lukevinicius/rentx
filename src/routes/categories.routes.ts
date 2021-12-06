import { Router } from 'express';

import { CategoriesRepository } from '../repositories/CategoriesRepository';
import { CreateCategoryService } from '../services/CreateCategoryService';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post('/', (Request, Response) => {
  const { name, description } = Request.body;

  const createCategoryService = new CreateCategoryService(categoriesRepository);
  createCategoryService.execute({ name, description });

  Response.status(201).send();
});

categoriesRoutes.get('/', (Request, Response) => {
  const all = categoriesRepository.list();

  Response.status(201).json(all);
});

export { categoriesRoutes };
