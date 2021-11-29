import { Users } from '../../../../database/entities';
import { UsersRepository } from '../../repositories/implementations/UsersRepository';
import { GetStudentForNameUseCase } from './GetStudentForNameUseCase';

class GetStudentForNameController {
  async handle(name: string): Promise<Users> {
    const usersRepository = new UsersRepository();
    const getStudentForNameUseCase = new GetStudentForNameUseCase(
      usersRepository,
    );
    const student = await getStudentForNameUseCase.execute(name);

    return student;
  }
}

export { GetStudentForNameController };
