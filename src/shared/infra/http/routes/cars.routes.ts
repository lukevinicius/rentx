import { Router } from 'express';

import { CreateCarController } from '@modules/cars/useCases/createCar/CreateCar.controller';

const createCarController = new CreateCarController();

const carsRoutes = Router();

carsRoutes.post('/', createCarController.handle);

export { carsRoutes };
