import { ICreateTypesDTO } from '../../../dtos/ICreateTypesDTO';
import { ITypesRepository } from '../../respositories/ITypesRepository';

class CreateTypeUseCase {
  constructor(private TypesRepository: ITypesRepository) {}

  async execute({ name, hours }: ICreateTypesDTO): Promise<void> {
    await this.TypesRepository.create({ name, hours });
  }
}

export { CreateTypeUseCase };
