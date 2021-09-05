import { TaskModalAction, TaskModalState } from "../../types/task-modal-type";
import {
  UPDATE_TASK_MODAL_TYPE,
  UPDATE_TASK_MODAL_VISIBLE,
  UPDATE_TASK_MODAL_DETAILS,
} from "./actionTypes";

const initialState: TaskModalState = {
  type: "CREATE",
  show: false,
  details: null,
};

const taskModalReducer = (
  state = initialState,
  action: TaskModalAction
): TaskModalState => {
  switch (action.type) {
    case UPDATE_TASK_MODAL_TYPE:
      return { ...state, type: action.modalType! };
    case UPDATE_TASK_MODAL_VISIBLE:
      return { ...state, show: action.show! };
    case UPDATE_TASK_MODAL_DETAILS:
      return { ...state, details: action.details };
    default:
      return state;
  }
};

export default taskModalReducer;
