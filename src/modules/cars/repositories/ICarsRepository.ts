import { ICreateCarDTO } from '../dtos/ICreateCarDTO';
import { Car } from '../infra/typeorm/entities/Car';

export interface ICarsRepository {
  create(data: ICreateCarDTO): Promise<void>;
  findByLicencePlate(license_plate: string): Promise<Car>;
}
