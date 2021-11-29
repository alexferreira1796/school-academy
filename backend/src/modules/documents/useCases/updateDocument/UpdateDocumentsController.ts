import { Request, response, Response } from 'express';
import { DocumentsRepository } from '../../repositories/implementations/DocumentsRepository';

import { UpdateDocumentsUseCase } from './UpdateDocumentsUseCase';

class UpdateDocumentsController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id, status, hours } = req.body;
    const documentsRepository = new DocumentsRepository();
    const documentsUseCase = new UpdateDocumentsUseCase(documentsRepository);

    const result = await documentsUseCase.execute({
      id,
      status,
      hours,
    });

    if (result && result.affected) {
      return res.status(200).json({
        message: 'Atualizado com sucesso!',
      });
    } else {
      return res.status(500).json({
        message: 'Falha ao atualizar!',
      });
    }
  }
}

export { UpdateDocumentsController };
