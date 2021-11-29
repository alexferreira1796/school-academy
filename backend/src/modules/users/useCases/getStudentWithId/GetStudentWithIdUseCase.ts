import { IUsersRepository } from '../../repositories/IUsersRepository';

class GetStudentWithIdUseCase {
  constructor(private UsersRepository: IUsersRepository) {}

  async execute(id: string) {
    return await this.UsersRepository.getStudent(id);
  }
}

export { GetStudentWithIdUseCase };
