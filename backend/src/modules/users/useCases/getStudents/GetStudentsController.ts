import { Response, Request } from 'express';
import { Users } from '../../../../database/entities';
import { UsersRepository } from '../../repositories/implementations/UsersRepository';
import { GetStudentsUseCase } from './GetStudentsUseCase';

class GetStudentsController {
  async handle(req: Request, res: Response): Promise<Response> {
    const usersRepository = new UsersRepository();
    const getStudentsUseCase = new GetStudentsUseCase(usersRepository);
    const all = await getStudentsUseCase.execute();

    return res.status(201).send(all);
  }
}

export { GetStudentsController };
