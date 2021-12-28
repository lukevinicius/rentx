import { Specification } from '../infra/typeorm/entities/Specification';

interface ICreateSpecationsDTO {
  name: string;
  description: string;
}

interface ISpecificationRepository {
  create({ name, description }: ICreateSpecationsDTO): Promise<void>;
  findByName(name: string): Promise<Specification>;
  list(): Promise<Specification[]>;
}

export { ICreateSpecationsDTO, ISpecificationRepository };
