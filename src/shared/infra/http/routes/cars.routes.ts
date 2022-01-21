import { Router } from 'express';

import { CreateCarController } from '@modules/cars/useCases/createCar/CreateCar.controller';

import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const createCarController = new CreateCarController();

const carsRoutes = Router();

carsRoutes.post(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  createCarController.handle,
);

export { carsRoutes };
