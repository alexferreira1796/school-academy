import { ICreateUserDTO } from '../../../dtos/ICreateUserDTO';
import { hash } from 'bcrypt';
import { IUsersRepository } from '../../repositories/IUsersRepository';

class CreateUserUseCase {
  constructor(private UsersRepository: IUsersRepository) {}

  async execute({
    name,
    username,
    registration,
    password,
    isAdmin,
  }: ICreateUserDTO): Promise<void> {
    const passwordHash = await hash(password, 8);

    await this.UsersRepository.create({
      name,
      username,
      registration,
      password: passwordHash,
      isAdmin,
    });
  }
}

export { CreateUserUseCase };
