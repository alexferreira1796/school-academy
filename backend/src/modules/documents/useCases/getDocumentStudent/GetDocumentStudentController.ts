import { Request, Response } from 'express';
import { DocumentsRepository } from '../../repositories/implementations/DocumentsRepository';

import { GetDocumentStudentUseCase } from './GetDocumentStudentUseCase';

class GetDocumentStudentController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const documentsRepository = new DocumentsRepository();
    const documentsUseCase = new GetDocumentStudentUseCase(documentsRepository);

    const docs = await documentsUseCase.execute(id);

    return res.status(200).json(docs);
  }
}

export { GetDocumentStudentController };
