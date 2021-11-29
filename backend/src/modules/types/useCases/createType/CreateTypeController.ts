import { Request, Response } from 'express';
import { TypesRepository } from '../../respositories/implementations/TypesRepository';
import { CreateTypeUseCase } from '../createType/CreateTypeUseCase';

class CreateTypeController {
  async handle(req: Request, res: Response) {
    const { name, hours } = req.body;
    const typesRepository = new TypesRepository();
    const createTypesUseCase = new CreateTypeUseCase(typesRepository);

    await createTypesUseCase.execute({ name, hours });

    res.status(201).json({
      message: 'Tipo criado com sucesso!',
    });
  }
}

export { CreateTypeController };
