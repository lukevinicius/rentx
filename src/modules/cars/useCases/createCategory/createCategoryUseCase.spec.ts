import { AppError } from 'src/errors/AppError';

import { InMemoryCategoriesRepository } from '../../repositories/in-memory/InMemoryCategories';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';

let createCategoryUseCase: CreateCategoryUseCase;
let inMemoryCategoriesRepository: InMemoryCategoriesRepository;

describe('Create Category', () => {
  beforeEach(() => {
    inMemoryCategoriesRepository = new InMemoryCategoriesRepository();
    createCategoryUseCase = new CreateCategoryUseCase(
      inMemoryCategoriesRepository,
    );
  });
  it('should be able to create a new category', async () => {
    const category = {
      name: 'test',
      description: 'test description',
    };
    await createCategoryUseCase.execute(category);

    const categoryCreated = await inMemoryCategoriesRepository.findByName(
      category.name,
    );

    expect(categoryCreated).toHaveProperty('id');
  });

  it('should be able to create a new category with name exists', async () => {
    expect(async () => {
      const category = {
        name: 'test',
        description: 'test description',
      };
      await createCategoryUseCase.execute(category);
      await createCategoryUseCase.execute(category);
    }).rejects.toBeInstanceOf(AppError);
  });
});
