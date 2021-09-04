import { UPDATE_MODAL_ICON_COLOR } from "./actionTypes";
import {
  UPDATE_MODAL_VISIBLE,
  UPDATE_MODAL_TITLE,
  UPDATE_MODAL_MESSAGE,
} from "./actionTypes";

export const updateModalVisible =
  (visible: boolean) => (dispatch: DispatchModalActionType) =>
    dispatch({
      type: UPDATE_MODAL_VISIBLE,
      payload: visible,
    });

export const updateModalTitle =
  (title: string) => (dispatch: DispatchModalActionType) =>
    dispatch({
      type: UPDATE_MODAL_TITLE,
      payload: title,
    });

export const updateModalMessage =
  (message: string) => (dispatch: DispatchModalActionType) =>
    dispatch({
      type: UPDATE_MODAL_MESSAGE,
      payload: message,
    });

export const updateIconColor =
  (
    iconColor:
      | "inherit"
      | "disabled"
      | "action"
      | "primary"
      | "secondary"
      | "error"
  ) =>
  (dispatch: DispatchModalActionType) =>
    dispatch({
      type: UPDATE_MODAL_ICON_COLOR,
      payload: iconColor,
    });
