import { Router } from 'express';

import { SpecificationsRepository } from '../modules/cars/repositories/SpecificationRepository';
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService';

const specificationsRoutes = Router();

const SpecificationRepository = new SpecificationsRepository();

specificationsRoutes.post('/', (Request, Response) => {
  const { name, description } = Request.body;
  const createEspecificationService = new CreateSpecificationService(
    SpecificationRepository,
  );

  createEspecificationService.execute({ name, description });

  Response.status(201).send();
});

export { specificationsRoutes };
