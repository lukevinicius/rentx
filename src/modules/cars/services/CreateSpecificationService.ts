import { ICategoriesRepository } from '../repositories/ICategoriesRepository';

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationService {
  constructor(private categoriesRepository: ICategoriesRepository) { }
  execute({ name, description }: IRequest): void {
    /* const categoriesRepository = new CategoriesRepository(); */
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error(`Specification ${name} already exists`);
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateSpecificationService };
