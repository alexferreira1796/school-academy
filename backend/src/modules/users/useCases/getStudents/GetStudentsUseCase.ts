import { IUsersRepository } from '../../repositories/IUsersRepository';

class GetStudentsUseCase {
  constructor(private UsersRepository: IUsersRepository) {}

  async execute() {
    return await this.UsersRepository.getAllStudents();
  }
}

export { GetStudentsUseCase };
