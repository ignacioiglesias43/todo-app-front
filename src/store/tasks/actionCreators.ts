import { ADD_TASK, REMOVE_TASK, UPDATE_TASKS } from "./actionTypes";
import { TaskDto } from "../../api/task/dto/task.dto";
import { DispatchTaskActionType, ITask } from "../../types/task";

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

export const updateTasks =
  (tasks: TaskDto[]) => (dispatch: DispatchTaskActionType) => {
    dispatch({
      type: UPDATE_TASKS,
      tasks,
    });
  };
