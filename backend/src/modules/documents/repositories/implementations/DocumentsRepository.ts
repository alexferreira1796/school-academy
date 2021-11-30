import { UpdateResult } from "typeorm";

import { Documents } from "../../../../database/entities/Documents";
import { ICreateDocumentDTO } from "../../../dtos/ICreateDocumentDTO";
import { IGetFilesStudent } from "../../../dtos/IGetFilesStudent";
import { IUpdateDocumentDTO } from "../../../dtos/IUpdateDocumentDTO";
import { IDocumentRepository } from "../IDocumentRepository";

class DocumentsRepository implements IDocumentRepository {
  async create({ name_file, idUser, idType, name_path }: ICreateDocumentDTO) {
    const doc = Documents.create({
      name_file,
      name_path,
      status: false,
      idUser,
      idType,
    });

    await doc.save();
  }

  async getDocumentHours(): Promise<number | false> {
    const registers = await Documents.find({
      where: { status: true },
    });
    if (registers) {
      const data = registers
        .map(({ hours }) => +hours)
        .reduce((acc, next) => acc + next, 0);

      return data;
    }
    return false;
  }

  async findByFilesStudent(id: string): Promise<IGetFilesStudent[]> {
    const docs = await Documents.find({
      where: { idUser: id },
      relations: ["user"],
      order: {
        user: "DESC",
      },
    });
    if (docs) {
      const data = docs.map(({ id, name_file, name_path, status, hours }) => {
        return {
          id,
          nameFile: name_file,
          namePath: name_path,
          status,
          hours,
        };
      });
      return data;
    }
    return [];
  }

  async updateDocument({
    id,
    status,
    hours,
  }: IUpdateDocumentDTO): Promise<UpdateResult> {
    const result = await Documents.update(id, {
      status,
      hours,
    });
    return result;
  }
}

export { DocumentsRepository };
