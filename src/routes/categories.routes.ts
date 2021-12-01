import { Router } from 'express';
import { v4 as uuidV4 } from 'uuid';

const categoriesRoutes = Router();

const categories = [];

categoriesRoutes.post('/', (Request, Response) => {
  const { name, description } = Request.body;

  const category = {
    id: uuidV4(),
    name,
    description,
  };

  categories.push(category);

  Response.status(201).json(categories);
});

export { categoriesRoutes };
