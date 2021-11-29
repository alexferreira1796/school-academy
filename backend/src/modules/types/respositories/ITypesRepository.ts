import { Types } from '../../../database/entities/Types';
import { ICreateTypesDTO } from '../../dtos/ICreateTypesDTO';

interface ITypesRepository {
  getTypes(): Promise<Types[]>;
  create(data: ICreateTypesDTO): Promise<void>;
  findByName(name: string): Promise<Types>;
}

export { ITypesRepository };
