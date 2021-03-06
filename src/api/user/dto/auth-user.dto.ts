export type AuthUserDto = {
  id?: number;
  name: string;
  lastName: string;
  email: string;
  userName?: string;
  password?: string;
  repeatPassword?: string;
  access_token?: string;
  createdAt?: string;
  updatedAt?: string;
};
