import { ADD_TASK, REMOVE_TASK, UPDATE_TASK } from "./actionTypes";

export const addTask = (task: ITask) => (dispatch: DispatchTaskActionType) => {
  dispatch({
    type: ADD_TASK,
    task,
  });
};

export const removeTask =
  (task: ITask) => (dispatch: DispatchTaskActionType) => {
    dispatch({
      type: REMOVE_TASK,
      task,
    });
  };

export const updateTask =
  (task: ITask) => (dispatch: DispatchTaskActionType) => {
    dispatch({
      type: UPDATE_TASK,
      task,
    });
  };
