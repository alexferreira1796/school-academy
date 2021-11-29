import { Request, Response, NextFunction } from 'express';
import { UsersRepository } from '../modules/users/repositories/implementations/UsersRepository';

async function validUser(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<Response<any, Record<string, any>>> {
  const { username, isAdmin, registration } = req.body;
  const usersRepository = new UsersRepository();

  const userAlreadyExists = await usersRepository.findByUserName(
    username,
    isAdmin,
  );

  const registerAlreadyExists = await usersRepository.findByRegistration(
    registration,
    isAdmin,
  );

  if (registerAlreadyExists) {
    return res.status(422).json({
      message: 'Esse usuário já existe!',
    });
  }
  if (userAlreadyExists) {
    return res.status(422).json({
      message: 'Esse usuário já existe!',
    });
  }
  next();
}

export { validUser };
