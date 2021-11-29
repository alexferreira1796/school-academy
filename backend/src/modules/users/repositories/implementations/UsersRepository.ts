import { ICreateUserDTO } from '../../../dtos/ICreateUserDTO';
import { IGetStudentDTO } from '../../../dtos/IGetStudentDTO';
import { Users } from '../../../../database/entities/Users';
import { IUsersRepository } from '../IUsersRepository';

class UsersRepository implements IUsersRepository {
  async create({
    name,
    username,
    registration,
    password,
    isAdmin,
  }: ICreateUserDTO): Promise<void> {
    const user = Users.create({
      name,
      username,
      registration,
      password,
      isAdmin,
    });

    await Users.save(user);
  }

  async getAllUsers(): Promise<Users[]> {
    const user = await Users.find();
    return user;
  }

  async getAllStudents(): Promise<Users[]> {
    const user = await Users.find({ where: { isAdmin: false } });
    return user;
  }

  async getStudent(id: string): Promise<IGetStudentDTO[] | undefined> {
    const user = await Users.find({
      where: {
        id,
      },
    });
    let res = [];
    if (user && user.length > 0) {
      res = user.map((item) => {
        return {
          id: item.id,
          name: item.name,
          registration: item.registration,
        };
      });
    }
    return res;
  }

  async findByName(name: string, isAdmin: string): Promise<Users> {
    const user = await Users.findOne({ where: { name, isAdmin } });
    return user;
  }

  async findByUserName(username: string, isAdmin: string): Promise<Users> {
    const user = await Users.findOne({ where: { username, isAdmin } });
    return user;
  }

  async findByRegistration(
    registration: string,
    isAdmin: string,
  ): Promise<Users> {
    const user = await Users.findOne({ where: { registration, isAdmin } });
    return user;
  }

  async findById(id: string): Promise<Users> {
    const user = await Users.findOne(id);
    return user;
  }
}

export { UsersRepository };
