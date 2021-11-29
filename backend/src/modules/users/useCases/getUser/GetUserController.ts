import { Response, Request } from 'express';
import { Users } from '../../../../database/entities';
import { UsersRepository } from '../../repositories/implementations/UsersRepository';
import { GetUserUseCase } from './GetUserUseCase';

class GetUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const usersRepository = new UsersRepository();
    const getUserUseCase = new GetUserUseCase(usersRepository);
    const all = await getUserUseCase.execute();

    return res.status(201).send(all);
  }
}

export { GetUserController };
