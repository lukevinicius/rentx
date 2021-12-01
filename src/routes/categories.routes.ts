import { Router } from 'express';

const categoriesRoutes = Router();

const categories = [];

categoriesRoutes.post('/categories', (Request, Response) => {
  const { name, description } = Request.body;

  categories.push({
    name,
    description,
  });

  Response.status(201).json();
});

export { categoriesRoutes };
