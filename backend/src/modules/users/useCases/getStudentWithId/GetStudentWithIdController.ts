import { Response, Request } from 'express';
import { UsersRepository } from '../../repositories/implementations/UsersRepository';
import { GetStudentWithIdUseCase } from './GetStudentWithIdUseCase';

class GetStudentWithIdController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const usersRepository = new UsersRepository();
    const getStudentWidthIdUseCase = new GetStudentWithIdUseCase(
      usersRepository,
    );
    const student = await getStudentWidthIdUseCase.execute(id);

    return res.status(201).json(student);
  }
}

export { GetStudentWithIdController };
