import { useState } from "react";
import { login, signup } from "../api/user/services";
import { useForm } from "./useForm";
import { ILoginForm, initialLoginForm } from "../constants/initialLoginForm";
import { ISignupForm, initialSignupForm } from "../constants/initialSignupForm";
import { AuthUserDto } from "../api/user/dto/auth-user.dto";
import { validateEmail } from "../utils/validateEmail";
import { useAppDispatch } from "../store/hooks";
import { updateUserInfo, updateToken } from "../store/auth/actionCreators";
import { updateIconColor } from "../store/modal/actionCreators";
import {
  updateModalMessage,
  updateModalTitle,
  updateModalVisible,
} from "../store/modal/actionCreators";

export const useAuthForm = (formType: FormType) => {
  const { formFields, createChangeHandler } = useForm<ILoginForm, ISignupForm>(
    formType === "LOGIN" ? initialLoginForm : initialSignupForm
  );

  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();

  const submitForm = async (
    event:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    try {
      event.preventDefault();
      setIsLoading(true);
      const result =
        formType === "LOGIN"
          ? await handleLogin(formFields)
          : await handleSignup(formFields);

      if (result) {
        const { access_token, ...user }: AuthUserDto = result.data;
        localStorage.setItem("JWT", access_token!);
        dispatch(updateToken(access_token!));
        dispatch(updateUserInfo(user!));
      }
      setIsLoading(false);
    } catch (error: any) {
      setIsLoading(false);
      console.log("e", error.response);
    }
  };

  const handleLogin = (fields: ILoginForm) => {
    const { email, password } = fields;
    if (email && password) {
      const isEmail = validateEmail(email);
      const field = isEmail ? "email" : "userName";
      return login({
        [field]: email,
        password,
      });
    } else {
      dispatch(updateModalMessage("All fields are required."));
      dispatch(updateModalTitle("Warning"));
      dispatch(updateIconColor("inherit"));
      dispatch(updateModalVisible(true));
    }
    return null;
  };

  const handleSignup = (fields: ISignupForm) => {
    const {
      name = "",
      lastName = "",
      userName = "",
      email,
      password,
      repeatPassword,
    } = fields;
    if (name && lastName && email && password && repeatPassword) {
      if (password === repeatPassword) {
        const data: AuthUserDto = { name, lastName, email, password };

        if (userName) {
          data.userName = userName;
        }

        return signup(data);
      } else {
        dispatch(updateModalMessage("Password's do not match."));
        dispatch(updateModalTitle("Warning"));
        dispatch(updateModalVisible(true));
      }
    } else {
      dispatch(updateModalMessage("All fields but username are required."));
      dispatch(updateModalTitle("Warning"));
      dispatch(updateModalVisible(true));
    }
    return null;
  };

  return {
    formFields,
    submitForm,
    setValues: createChangeHandler,
    isLoading,
  };
};
