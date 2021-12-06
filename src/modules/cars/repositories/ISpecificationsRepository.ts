interface ICreateSpecationsDTO {
  name: string;
  description: string;
}

interface ISpecificationRepository {
  create({ name, description }: ICreateSpecationsDTO): void;
}

export { ICreateSpecationsDTO, ISpecificationRepository };
