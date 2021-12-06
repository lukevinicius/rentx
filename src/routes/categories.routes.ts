import { Router } from 'express';
import { v4 as uuidV4 } from 'uuid';

import { Category } from '../model/Category';

const categoriesRoutes = Router();

const categories: Category[] = [];

categoriesRoutes.post('/', (Request, Response) => {
  const { name, description } = Request.body;

  const category: Category = new Category();
  Object.assign(category, {
    id: uuidV4(),
    name,
    description,
    created_at: new Date(),
  });

  categories.push(category);

  Response.status(201).json({ categories });
});

export { categoriesRoutes };
