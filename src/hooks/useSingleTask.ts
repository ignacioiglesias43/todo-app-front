import { updateTaskService, deleteTask } from "../api/task/services";
import { useState, useEffect } from "react";
import { ITask } from "../types/task";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { removeTask, updateSingleTask } from "../store/tasks/actionCreators";
import { RootState } from "../store/index";
import { updateConfirmDialogCallback } from "../store/confirmDialog/actionCreators";
import {
  updateConfirmDialogTask,
  updateConfirmDialogVisible,
} from "../store/confirmDialog/actionCreators";
import {
  updateTaskModalDetails,
  updateTaskModalType,
  updateTaskModalVisible,
} from "../store/taskModal/actionCreators";

export const useSingleTask = (task: ITask) => {
  const [checked, setChecked] = useState(task?.status?.id === 1);
  const [tooltip, setTooltip] = useState(task?.status?.name || "");
  const { userConfirmed, task: taskToDelete } = useAppSelector(
    (state: RootState) => state.confirmDialogReducer
  );
  const dispatch = useAppDispatch();
  const token = localStorage.getItem("JWT")!;

  const handleChecked = async () => {
    try {
      const r = await updateTaskService(token, task?.id!, {
        ...task,
        statusId: checked ? 2 : 1,
      });
      setChecked(r.data.status?.id === 1);
      setTooltip(r.data.status?.name! || "");
      dispatch(updateSingleTask(r.data));
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleEdit = () => {
    dispatch(updateTaskModalDetails(task));
    dispatch(updateTaskModalType("UPDATE"));
    dispatch(updateTaskModalVisible(true));
  };

  useEffect(() => {
    const handleDelete = async () => {
      try {
        const result = await deleteTask(token, task.id!);
        if (result) {
          dispatch(removeTask(task));
          dispatch(updateConfirmDialogCallback(false));
        }
      } catch (error: any) {
        console.log(error?.response);
      }
    };

    if (userConfirmed && taskToDelete?.id === task.id) {
      handleDelete().finally(() =>
        dispatch(updateConfirmDialogTask(undefined))
      );
    }
  }, [dispatch, task, taskToDelete, token, userConfirmed]);

  const openDelete = () => {
    dispatch(updateConfirmDialogTask(task));
    dispatch(updateConfirmDialogVisible(true));
  };

  return {
    checked,
    tooltip,
    handleChecked,
    handleEdit,
    openDelete,
  };
};
