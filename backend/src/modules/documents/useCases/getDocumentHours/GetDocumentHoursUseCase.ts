import { DocumentsRepository } from '../../repositories/implementations/DocumentsRepository';

class GetDocumentHoursUseCase {
  constructor(private documentsRepository: DocumentsRepository) {}

  async execute() {
    return await this.documentsRepository.getDocumentHours();
  }
}

export { GetDocumentHoursUseCase };
