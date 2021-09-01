import { UPDATE_TOKEN } from "./actionTypes";

export const updateToken =
  (token: string) => (dispatch: DispatchAuthActionType) =>
    dispatch({
      type: UPDATE_TOKEN,
      payload: token,
    });
