import { UpdateResult } from 'typeorm';
import { IUpdateDocumentDTO } from '../../../dtos/IUpdateDocumentDTO';
import { DocumentsRepository } from '../../repositories/implementations/DocumentsRepository';

class UpdateDocumentsUseCase {
  constructor(private documentsRepository: DocumentsRepository) {}

  async execute(data: IUpdateDocumentDTO): Promise<UpdateResult> {
    const { id, status, hours } = data;
    return await this.documentsRepository.updateDocument({
      id,
      status,
      hours,
    });
  }
}

export { UpdateDocumentsUseCase };
