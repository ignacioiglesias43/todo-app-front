import { User } from "../api/user/model/User";
interface AuthState {
  token: string;
  userInfo: ?User;
}

type AuthAction = {
  type: string;
  payload: any;
};

type DispatchAuthActionType = (args: AuthAction) => AuthAction;
