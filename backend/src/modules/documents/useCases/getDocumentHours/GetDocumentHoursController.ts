import { Request, Response } from 'express';
import { DocumentsRepository } from '../../repositories/implementations/DocumentsRepository';
import { GetDocumentHoursUseCase } from './GetDocumentHoursUseCase';

class GetDocumentHoursController {
  async handle(req: Request, res: Response): Promise<Response> {
    const documentsRepository = new DocumentsRepository();
    const documentsUseCase = new GetDocumentHoursUseCase(documentsRepository);
    const hours = await documentsUseCase.execute();

    if (hours) {
      return res.status(200).json(hours);
    } else {
      return res.status(200).json({
        message: 'Nenhum registro encontrado',
      });
    }
  }
}

export { GetDocumentHoursController };
