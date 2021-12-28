import { getRepository, Repository } from 'typeorm';

import {
  ICreateSpecationsDTO,
  ISpecificationRepository,
} from '@modules/cars/repositories/ISpecificationsRepository';

import { Specification } from '../entities/Specification';

class SpecificationsRepository implements ISpecificationRepository {
  private repository: Repository<Specification>;

  constructor() {
    this.repository = getRepository(Specification);
  }

  async create({ name, description }: ICreateSpecationsDTO): Promise<void> {
    const specification = this.repository.create({
      description,
      name,
    });

    await this.repository.save(specification);
  }

  async list(): Promise<Specification[]> {
    const specifications = await this.repository.find();

    return specifications;
  }

  async findByName(name: string): Promise<Specification> {
    const specifications = await this.repository.findOne(name);

    return specifications;
  }
}

export { SpecificationsRepository };
