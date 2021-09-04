export interface ISignupForm {
  name?: string;
  lastName?: string;
  email: string;
  userName?: string;
  password: string;
  repeatPassword?: string;
}

export const initialSignupForm: ISignupForm = {
  name: "",
  lastName: "",
  email: "",
  userName: "",
  password: "",
  repeatPassword: "",
};
