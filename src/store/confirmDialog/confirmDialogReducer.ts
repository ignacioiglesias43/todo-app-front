import {
  ConfirmDialogAction,
  ConfirmDialogState,
} from "../../types/confirm-dialog";
import {
  UPDATE_CONFIRM_VISIBLE,
  UPDATE_CONFIRM_TASK,
  UPDATE_CONFIRM_CALLBACK,
} from "./actionTypes";

const initialState: ConfirmDialogState = {
  visible: false,
  task: undefined,
  userConfirmed: false,
};

const confirmDialogReducer = (
  state = initialState,
  action: ConfirmDialogAction
): ConfirmDialogState => {
  switch (action.type) {
    case UPDATE_CONFIRM_VISIBLE:
      return { ...state, visible: action.payload };
    case UPDATE_CONFIRM_TASK:
      return { ...state, task: action.payload };
    case UPDATE_CONFIRM_CALLBACK:
      return { ...state, userConfirmed: action.payload };
    default:
      return state;
  }
};

export default confirmDialogReducer;
