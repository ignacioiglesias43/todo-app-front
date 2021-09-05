import { TaskAction, TaskState } from "../../types/task";
import {
  ADD_TASK,
  REMOVE_TASK,
  UPDATE_TASKS,
  UPDATE_SINGLE_TASK,
} from "./actionTypes";

const initialState: TaskState = {
  tasks: [],
};

const taskReducer = (state = initialState, action: TaskAction): TaskState => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, tasks: state.tasks.concat(action.task!) };
    case REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action?.task?.id),
      };
    case UPDATE_TASKS:
      return { ...state, tasks: action.tasks! };
    case UPDATE_SINGLE_TASK:
      const tasks = [...state.tasks];
      const newTaskIndex = tasks.findIndex(
        (task) => task.id === action.task?.id
      );
      tasks[newTaskIndex] = { ...action.task! };
      return { ...state, tasks };
    default:
      return state;
  }
};

export default taskReducer;
