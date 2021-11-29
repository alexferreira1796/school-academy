import { Request, response, Response } from 'express';
import { DocumentsRepository } from '../../repositories/implementations/DocumentsRepository';

import { CreateDocumentsUseCase } from './CreateDocumentsUseCase';

class CreateDocumentsController {
  handle(req: Request, res: Response): Response {
    const { file, body } = req;
    const documentsRepository = new DocumentsRepository();
    const documentsUseCase = new CreateDocumentsUseCase(documentsRepository);

    const data = {
      file,
      body,
    };

    documentsUseCase.execute(data);

    return res.status(200).json({
      message: 'Salvo com sucesso!',
    });
  }
}

export { CreateDocumentsController };
