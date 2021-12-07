import { Category } from '../../model/Category';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

class ListCategoriesUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) { }
  execute(): Category[] {
    this.categoriesRepository.list();
  }
}

export { ListCategoriesUseCase };
