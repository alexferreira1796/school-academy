import { Request, response, Response } from 'express';
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';

class AuthenticateUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { password, username, registration, isAdmin } = req.body;

    const authenticateUserUseCase = new AuthenticateUserUseCase();

    try {
      const token = await authenticateUserUseCase.execute({
        username,
        registration,
        password,
        isAdmin,
      });
      res.json(token);
    } catch (e) {
      return res.status(422).json({
        message: e.message,
      });
    }
  }
}

export { AuthenticateUserController };
