import { Request, Response } from 'express';
import { TypesRepository } from '../../respositories/implementations/TypesRepository';
import { GetTypesUseCase } from './GetTypesUseCase';

class GetTypesController {
  async handle(req: Request, res: Response) {
    const typesRepository = new TypesRepository();
    const getTypesUseCase = new GetTypesUseCase(typesRepository);
    const all = await getTypesUseCase.execute();

    return res.status(200).json(all);
  }
}

export { GetTypesController };
