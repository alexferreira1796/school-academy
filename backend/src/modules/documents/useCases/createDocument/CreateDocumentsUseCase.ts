import { DocumentsRepository } from '../../repositories/implementations/DocumentsRepository';
import { GetStudentForNameController } from '../../../users/useCases/getStudentForName/GetStudentForNameController';
import { ICreateDocumentDTO } from '../../../dtos/ICreateDocumentDTO';

class CreateDocumentsUseCase {
  constructor(private documentsRepository: DocumentsRepository) {}

  async execute(data: any) {
    const { file, body } = data;
    const getStudentForNameController = new GetStudentForNameController();
    const user = await getStudentForNameController.handle(body.userName);
    if (user) {
      const { id } = user;
      const dataDocs: ICreateDocumentDTO = {
        name_file: file.filename,
        name_path: file.originalname,
        idUser: id,
        idType: body.idType,
      };
      this.documentsRepository.create(dataDocs);
    }
  }
}

export { CreateDocumentsUseCase };
