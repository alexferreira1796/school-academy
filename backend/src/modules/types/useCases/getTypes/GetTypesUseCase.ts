import { ITypesRepository } from '../../respositories/ITypesRepository';

class GetTypesUseCase {
  constructor(private TypesRepository: ITypesRepository) {}

  async execute() {
    return await this.TypesRepository.getTypes();
  }
}

export { GetTypesUseCase };
