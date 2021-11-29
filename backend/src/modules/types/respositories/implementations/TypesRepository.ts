import { Types } from '../../../../database/entities/Types';
import { ICreateTypesDTO } from '../../../dtos/ICreateTypesDTO';
import { ITypesRepository } from '../ITypesRepository';

class TypesRepository implements ITypesRepository {
  async create({ name, hours }: ICreateTypesDTO): Promise<void> {
    const save = Types.create({ name, hours });
    await Types.save(save);
  }

  async getTypes(): Promise<Types[]> {
    const types = await Types.find();
    return types;
  }

  findByName(name: string): Promise<Types> {
    throw new Error('Method not implemented.');
  }
}

export { TypesRepository };
