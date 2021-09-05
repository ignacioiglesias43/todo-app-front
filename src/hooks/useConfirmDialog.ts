import { useAppSelector, useAppDispatch } from "../store/hooks";
import { RootState } from "../store/index";
import {
  updateConfirmDialogTask,
  updateConfirmDialogCallback,
  updateConfirmDialogVisible,
} from "../store/confirmDialog/actionCreators";

export const useConfirmDialog = () => {
  const confirmState = useAppSelector(
    (state: RootState) => state.confirmDialogReducer
  );
  const dispatch = useAppDispatch();
  const handleClose = () => {
    dispatch(updateConfirmDialogTask(undefined));
    dispatch(updateConfirmDialogCallback(false));
    dispatch(updateConfirmDialogVisible(false));
  };
  const handleDelete = () => {
    dispatch(updateConfirmDialogCallback(true));
    dispatch(updateConfirmDialogVisible(false));
  };

  return {
    ...confirmState,
    handleClose,
    handleDelete,
  };
};
