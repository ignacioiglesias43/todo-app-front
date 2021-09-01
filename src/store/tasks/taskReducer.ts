import { ADD_TASK, REMOVE_TASK } from "./actionTypes";

const initialState: TaskState = {
  tasks: [],
};

const taskReducer = (state = initialState, action: TaskAction): TaskState => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, tasks: state.tasks.concat(action.task) };
    case REMOVE_TASK:
      const updatedTasks = state.tasks.filter(
        (task) => task.id !== action.task.id
      );

      return { ...state, tasks: updatedTasks };
    default:
      return state;
  }
};

export default taskReducer;
