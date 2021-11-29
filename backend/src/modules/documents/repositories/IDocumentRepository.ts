import { Documents } from '../../../database/entities/Documents';
import { ICreateDocumentDTO } from '../../dtos/ICreateDocumentDTO';
import { IGetFilesStudent } from '../../dtos/IGetFilesStudent';

interface IDocumentRepository {
  create(data: ICreateDocumentDTO): Promise<void>;
  findByFilesStudent(id: string): Promise<IGetFilesStudent[]>;
}

export { IDocumentRepository };
