import { inject, injectable } from 'tsyringe';

import { ISpecificationRepository } from '../../repositories/ISpecificationsRepository';

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject('SpecificationsRepository')
    private specificationsRepository: ISpecificationRepository,
  ) { }
  async execute({ name, description }: IRequest): Promise<void> {
    await this.specificationsRepository.create({ name, description });
  }
}

export { CreateSpecificationUseCase };
