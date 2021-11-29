interface ICreateUserDTO {
  name: string;
  username: string;
  registration: string;
  password: string;
  isAdmin?: boolean;
}

export { ICreateUserDTO };
