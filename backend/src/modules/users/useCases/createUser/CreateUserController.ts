import { Request, Response } from 'express';
import { UsersRepository } from '../../repositories/implementations/UsersRepository';
import { CreateUserUseCase } from './CreateUserUseCase';

class CreateUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, username, password, registration, isAdmin } = req.body;
    const usersRepository = new UsersRepository();
    const createUserCase = new CreateUserUseCase(usersRepository);

    await createUserCase.execute({
      name,
      username,
      password,
      registration,
      isAdmin,
    });

    return res.status(201).json({
      message: 'Usuário criado com sucesso!',
    });
  }
}

export { CreateUserController };
