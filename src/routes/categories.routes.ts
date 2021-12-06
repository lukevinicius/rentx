import { Router } from 'express';

import { CategoriesRepository } from '../repositories/CategoriesRepository';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post('/', (Request, Response) => {
  const { name, description } = Request.body;

  const categoryAlreadyExists = categoriesRepository.findByName(name);

  if (categoryAlreadyExists) {
    return Response.status(400).json({ error: 'Category already exists' });
  }

  categoriesRepository.create({ name, description });

  Response.status(201).send();
});

categoriesRoutes.get('/', (Request, Response) => {
  const all = categoriesRepository.list();

  Response.status(201).json(all);
});

export { categoriesRoutes };
