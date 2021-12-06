import { Specification } from '../model/Specification';
import {
  ICreateSpecationsDTO,
  ISpecificationRepository,
} from './ISpecificationsRepository';

class SpecificationsRepository implements ISpecificationRepository {
  private specifications: Specification[] = [];

  constructor() {
    this.specifications = [];
  }

  create({ name, description }: ICreateSpecationsDTO): void {
    const specification: Specification = new Specification();
    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    });

    this.specifications.push(specification);
  }

  list(): Specification[] {
    return this.specifications;
  }

  findByName(name: string): Specification {
    const specification = this.specifications.find(
      especification => especification.name === name,
    );
    return specification;
  }
}

export { SpecificationsRepository };
