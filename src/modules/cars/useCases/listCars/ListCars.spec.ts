import { InMemoryCarsRepository } from '@modules/cars/repositories/in-memory/InMemoryCars';

import { ListAvailableCarsService } from './ListCars.service';

let listAvailableCarsUseCase: ListAvailableCarsService;
let inMemoryCarsRepository: InMemoryCarsRepository;

describe('List Cars', () => {
  beforeEach(() => {
    inMemoryCarsRepository = new InMemoryCarsRepository();
    listAvailableCarsUseCase = new ListAvailableCarsService(
      inMemoryCarsRepository,
    );
  });

  it('should be able to list all available cars', async () => {
    const car = await inMemoryCarsRepository.create({
      name: 'Car1',
      description: 'Car description',
      daily_rate: 110.0,
      license_plate: 'DEF-1234',
      fine_amount: 40,
      brand: 'Car_brand',
      category_id: 'category_id',
    });

    const cars = await listAvailableCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it('should be able to list all available cars by brand', async () => {
    const car = await inMemoryCarsRepository.create({
      name: 'Car2',
      description: 'Car description',
      daily_rate: 110.0,
      license_plate: 'DEF-1234',
      fine_amount: 40,
      brand: 'Car_brand_test',
      category_id: 'category_id',
    });

    const cars = await listAvailableCarsUseCase.execute({
      brand: 'Car_brand_test',
    });

    expect(cars).toEqual([car]);
  });

  it('should be able to list all available cars by name', async () => {
    const car = await inMemoryCarsRepository.create({
      name: 'Car3',
      description: 'Car description',
      daily_rate: 110.0,
      license_plate: 'DEF-1235',
      fine_amount: 40,
      brand: 'Car_brand_test',
      category_id: 'category_id',
    });

    const cars = await listAvailableCarsUseCase.execute({
      name: 'Car3',
    });

    expect(cars).toEqual([car]);
  });

  it('should be able to list all available cars by category', async () => {
    const car = await inMemoryCarsRepository.create({
      name: 'Car3',
      description: 'Car description',
      daily_rate: 110.0,
      license_plate: 'DEF-1235',
      fine_amount: 40,
      brand: 'Car_brand_test',
      category_id: '12345',
    });

    const cars = await listAvailableCarsUseCase.execute({
      category_id: '12345',
    });

    expect(cars).toEqual([car]);
  });
});
