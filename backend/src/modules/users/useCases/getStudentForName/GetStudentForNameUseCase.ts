import { IUsersRepository } from '../../repositories/IUsersRepository';

class GetStudentForNameUseCase {
  constructor(private UsersRepository: IUsersRepository) {}

  async execute(name: string) {
    return await this.UsersRepository.findByName(name, false);
  }
}

export { GetStudentForNameUseCase };
