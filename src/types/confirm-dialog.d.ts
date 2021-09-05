import { ITask } from "./task";

interface ConfirmDialogState {
  visible: boolean;
  task?: ITask;
  userConfirmed: boolean;
}

type ConfirmDialogAction = {
  type: string;
  payload: any;
};

type DispatchConfirmDialogActionType = (
  args: ConfirmDialogAction
) => ConfirmDialogAction;
