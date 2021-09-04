export type CreateUserDto = {
  name: string;
  lastName: string;
  email: string;
  password: string;
  repeatPassword: string;
  userName?: string;
};
