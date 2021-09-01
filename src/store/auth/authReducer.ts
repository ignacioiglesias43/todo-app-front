import { UPDATE_TOKEN } from "./actionTypes";

const initialState: AuthState = {
  token: "",
};

const authReducer = (state = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case UPDATE_TOKEN:
      return { ...state, token: action.payload };
    default:
      return state;
  }
};

export default authReducer;
