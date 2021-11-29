import { DocumentsRepository } from '../../repositories/implementations/DocumentsRepository';
import { GetStudentForNameController } from '../../../users/useCases/getStudentForName/GetStudentForNameController';
import { ICreateDocumentDTO } from '../../../dtos/ICreateDocumentDTO';

class GetDocumentStudentUseCase {
  constructor(private documentsRepository: DocumentsRepository) {}

  async execute(id: string) {
    return await this.documentsRepository.findByFilesStudent(id);
  }
}

export { GetDocumentStudentUseCase };
