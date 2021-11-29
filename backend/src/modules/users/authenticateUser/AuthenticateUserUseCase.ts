import { UsersRepository } from '../repositories/implementations/UsersRepository';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';

interface IRequest {
  username: string;
  registration: string;
  password: string;
  isAdmin: string;
}

interface IResponse {
  user: {
    name: string;
    username: string;
    registration: string;
    isAdmin: boolean;
  };
  token: string;
}

class AuthenticateUserUseCase {
  private repository;
  constructor() {
    this.repository = new UsersRepository();
  }
  async execute({
    username,
    password,
    registration,
    isAdmin,
  }: IRequest): Promise<IResponse> {
    // Usuário existe por Username
    let user: any;
    if (username && (username !== null || username !== '')) {
      user = await this.repository.findByUserName(username, isAdmin);
      if (!user) {
        throw new Error('Ops, algum dado você digitou errado!');
      }
    }

    // Se o numero de registro esta incorreto
    if (registration && (registration !== null || registration !== '')) {
      user = await this.repository.findByRegistration(registration, isAdmin);
      if (!user) {
        throw new Error('Ops, algum dado você digitou errado!');
      }
    }
    // Se a senha está correta
    const passwordMatch = await compare(password, user.password);
    if (!passwordMatch) {
      throw new Error('Ops, algum dado você digitou errado!');
    }

    const token = sign({}, '7b9eff490dd922746ae54f3385add119', {
      subject: user.id,
      expiresIn: '1d',
    });

    const tokenReturn: IResponse = {
      token,
      user: {
        name: user.name,
        username: user.username,
        registration: user.registration,
        isAdmin: user.isAdmin,
      },
    };

    // Gerar jsonwebtoken
    return tokenReturn;
  }
}

export { AuthenticateUserUseCase };
