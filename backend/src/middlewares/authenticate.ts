import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { UsersRepository } from '../modules/users/repositories/implementations/UsersRepository';

interface IPayload {
  sub: string;
}

export async function authenticate(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  // Bearer TOKEN
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    res.status(404).json({
      message: 'Token missing!',
    });
    return;
  }

  const [, token] = authHeader.split(' ');
  try {
    const { sub: user_id } = verify(
      token,
      '7b9eff490dd922746ae54f3385add119',
    ) as IPayload;

    const usersRepository = new UsersRepository();
    const user = await usersRepository.findById(user_id);

    if (!user) {
      res.status(401).json({
        message: 'Usuário não encontrado!',
      });
    }

    next();
  } catch {
    res.status(401).json({
      message: 'Token inválido!',
    });
  }
}
