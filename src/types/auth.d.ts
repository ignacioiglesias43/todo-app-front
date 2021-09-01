interface AuthState {
  token: string;
}

type AuthAction = {
  type: string;
  payload: any;
};

type DispatchAuthActionType = (args: AuthAction) => AuthAction;
