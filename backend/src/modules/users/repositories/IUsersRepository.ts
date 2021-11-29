import { Users } from '../../../database/entities';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { IGetStudentDTO } from '../../dtos/IGetStudentDTO';

interface IUsersRepository {
  getAllUsers(): Promise<Users[]>;
  getAllStudents(): Promise<Users[]>;
  getStudent(id: string): Promise<IGetStudentDTO[]>;
  create(data: ICreateUserDTO): Promise<void>;
  findByName(name: string, isAdmin: string | boolean): Promise<Users>;
  findById(id: string): Promise<Users>;
  findByUserName(username: string, isAdmin: string): Promise<Users>;
  findByRegistration(registration: string, isAdmin: string): Promise<Users>;
}

export { IUsersRepository };
