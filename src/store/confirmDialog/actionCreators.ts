import { DispatchConfirmDialogActionType } from "../../types/confirm-dialog";
import { ITask } from "../../types/task";
import {
  UPDATE_CONFIRM_VISIBLE,
  UPDATE_CONFIRM_TASK,
  UPDATE_CONFIRM_CALLBACK,
} from "./actionTypes";

export const updateConfirmDialogVisible =
  (visible: boolean) => (dispatch: DispatchConfirmDialogActionType) =>
    dispatch({
      type: UPDATE_CONFIRM_VISIBLE,
      payload: visible,
    });

export const updateConfirmDialogTask =
  (task?: ITask) => (dispatch: DispatchConfirmDialogActionType) =>
    dispatch({
      type: UPDATE_CONFIRM_TASK,
      payload: task,
    });

export const updateConfirmDialogCallback =
  (userConfirmed: boolean) => (dispatch: DispatchConfirmDialogActionType) =>
    dispatch({
      type: UPDATE_CONFIRM_CALLBACK,
      payload: userConfirmed,
    });
