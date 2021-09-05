import { ITask } from "../../types/task";
import { DispatchTaskModalActionType } from "../../types/task-modal-type";
import {
  UPDATE_TASK_MODAL_TYPE,
  UPDATE_TASK_MODAL_VISIBLE,
  UPDATE_TASK_MODAL_DETAILS,
} from "./actionTypes";

export const updateTaskModalType =
  (type: "CREATE" | "UPDATE") => (dispatch: DispatchTaskModalActionType) =>
    dispatch({
      type: UPDATE_TASK_MODAL_TYPE,
      modalType: type,
    });

export const updateTaskModalVisible =
  (show: boolean) => (dispatch: DispatchTaskModalActionType) =>
    dispatch({
      type: UPDATE_TASK_MODAL_VISIBLE,
      show,
    });

export const updateTaskModalDetails =
  (details: ITask | null) => (dispatch: DispatchTaskModalActionType) =>
    dispatch({
      type: UPDATE_TASK_MODAL_DETAILS,
      details,
    });
