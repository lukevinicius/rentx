import { Router } from 'express';

import { createSpecificationController } from '../modules/cars/useCases/createSpecification';

const specificationsRoutes = Router();

specificationsRoutes.post('/', (Request, Response) => {
  return createSpecificationController.handle(Request, Response);
});

export { specificationsRoutes };
