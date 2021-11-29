import { IUsersRepository } from '../../repositories/IUsersRepository';

class GetUserUseCase {
  constructor(private UsersRepository: IUsersRepository) {}

  async execute() {
    return await this.UsersRepository.getAllUsers();
  }
}

export { GetUserUseCase };
