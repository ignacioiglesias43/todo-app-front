import { TaskAction, TaskState } from "../../types/task";
import { ADD_TASK, REMOVE_TASK, UPDATE_TASKS } from "./actionTypes";

const initialState: TaskState = {
  tasks: [],
};

const taskReducer = (state = initialState, action: TaskAction): TaskState => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, tasks: state.tasks.concat(action.task!) };
    case REMOVE_TASK:
      const newTasks = state.tasks.filter(
        (task) => task.id !== action?.task?.id
      );
      return { ...state, tasks: newTasks };
    case UPDATE_TASKS:
      return { ...state, tasks: action.tasks! };
    default:
      return state;
  }
};

export default taskReducer;
