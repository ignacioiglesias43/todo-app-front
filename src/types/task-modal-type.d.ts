import { ITask } from "./task";

interface TaskModalState {
  show: boolean;
  type: "CREATE" | "UPDATE";
  details?: ?ITask;
}

type TaskModalAction = {
  type: string;
  modalType?: "CREATE" | "UPDATE";
  show?: boolean;
  details?: ?ITask;
};

type DispatchTaskModalActionType = (args: TaskModalAction) => TaskModalAction;
