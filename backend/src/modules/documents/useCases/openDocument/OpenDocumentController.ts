import { Request, Response } from "express";

import { OpenDocumentUseCase } from "./OpenDocumentUseCase";

class OpenDocumentController {
  handle(req: Request, res: Response): void {
    const { link } = req.params;
    const documentsUseCase = new OpenDocumentUseCase();

    const docs = documentsUseCase.execute(link);

    return res.sendFile(docs);
  }
}

export { OpenDocumentController };
