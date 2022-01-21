import { AppError } from '../../../../shared/errors/AppError';
import { InMemoryCarsRepository } from '../../repositories/in-memory/InMemoryCars';
import { CreateCarService } from './CreateCar.service';

let createCarService: CreateCarService;
let inMemoryCarsRepository: InMemoryCarsRepository;

describe('Create Car', () => {
  beforeEach(() => {
    inMemoryCarsRepository = new InMemoryCarsRepository();
    createCarService = new CreateCarService(inMemoryCarsRepository);
  });

  it('should be able create a new car', async () => {
    await createCarService.execute({
      name: 'Name Car',
      description: 'Description Car',
      daily_rate: 100,
      license_plate: 'ABC-1234',
      fine_amount: 60,
      brand: 'brand',
      category_id: 'category',
    });
  });

  it('should not be able to create a new car with exists licence plate', () => {
    expect(async () => {
      await createCarService.execute({
        name: 'Car 1',
        description: 'Description Car',
        daily_rate: 100,
        license_plate: 'ABC-1234',
        fine_amount: 60,
        brand: 'brand',
        category_id: 'category',
      });
      await createCarService.execute({
        name: 'Car 1',
        description: 'Description Car',
        daily_rate: 100,
        license_plate: 'ABC-1234',
        fine_amount: 60,
        brand: 'brand',
        category_id: 'category',
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
