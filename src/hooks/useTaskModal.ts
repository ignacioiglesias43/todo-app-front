import { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { RootState } from "../store/index";
import {
  updateTaskModalVisible,
  updateTaskModalDetails,
} from "../store/taskModal/actionCreators";
import { createTask, updateTaskService } from "../api/task/services";
import { TaskDto } from "../api/task/dto/task.dto";
import { addTask, updateSingleTask } from "../store/tasks/actionCreators";

interface TaskModalForm {
  title: string;
  content: string;
  startDate: Date | null;
  dueDate: Date | null;
}

export const useTaskModal = () => {
  const { details, ...taskModalState } = useAppSelector(
    (state: RootState) => state.taskModalReducer
  );
  const dispatch = useAppDispatch();
  const token = localStorage.getItem("JWT")!;

  const [taskModalForm, setTaskModalForm] = useState<TaskModalForm>({
    title: details?.title || "",
    content: details?.content || "",
    startDate: details?.startDate ? new Date(details?.startDate!) : null,
    dueDate: details?.dueDate ? new Date(details?.dueDate!) : null,
  });

  const handleStartDateChange = (startDate: Date | null) =>
    setTaskModalForm({ ...taskModalForm, startDate });

  const handleEndDateChange = (dueDate: Date | null) =>
    setTaskModalForm({ ...taskModalForm, dueDate });

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTaskModalForm({ ...taskModalForm, title: e.target.value });

  const handleContentChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTaskModalForm({ ...taskModalForm, content: e.target.value });

  const closeModal = () => {
    dispatch(updateTaskModalVisible(false));
    dispatch(updateTaskModalDetails(null));
    setTaskModalForm({
      title: "",
      content: "",
      startDate: null,
      dueDate: null,
    });
  };

  const handleSubmitForm = () => {
    if (token) {
      if (taskModalState.type === "CREATE") {
        if (taskModalForm.title && taskModalForm.content) {
          callCreateTask();
        }
      } else {
        if (taskModalForm.title && taskModalForm.content) {
          callUpdateTask();
        }
      }
    }
  };

  const callCreateTask = async () => {
    try {
      const data: TaskDto = {
        title: taskModalForm.title,
        content: taskModalForm.content,
      };

      if (taskModalForm.startDate) {
        data.startDate = taskModalForm.startDate?.toISOString();
      }

      if (taskModalForm.dueDate) {
        data.dueDate = taskModalForm.dueDate?.toISOString();
      }

      const result = await createTask(token, data);

      if (result) {
        const task: TaskDto = result?.data;
        dispatch(
          addTask({
            ...task,
            startDate: task.startDate!,
            dueDate: task.dueDate!,
          })
        );
        closeModal();
      }
    } catch (error: any) {
      if (error?.response) {
        console.log(error?.response);
      }
    }
  };

  const callUpdateTask = async () => {
    try {
      const data: TaskDto = {
        title: taskModalForm.title,
        content: taskModalForm.content,
        statusId: details?.status?.id,
      };

      if (taskModalForm.startDate) {
        data.startDate = taskModalForm.startDate?.toISOString();
      } else {
        data.startDate = null;
      }

      if (taskModalForm.dueDate) {
        data.dueDate = taskModalForm.dueDate?.toISOString();
      } else {
        data.dueDate = null;
      }

      const result = await updateTaskService(token, details?.id!, data);

      if (result) {
        const task: TaskDto = result?.data;
        dispatch(updateSingleTask(task));
        closeModal();
      }
    } catch (error: any) {
      if (error?.response) {
        console.log(error?.response);
      }
    }
  };

  useEffect(() => {
    if (details) {
      setTaskModalForm({
        title: details?.title || "",
        content: details?.content || "",
        startDate: details?.startDate ? new Date(details?.startDate) : null,
        dueDate: details?.dueDate ? new Date(details?.dueDate) : null,
      });
    }
  }, [details]);

  return {
    ...taskModalState,
    closeModal,
    handleStartDateChange,
    handleEndDateChange,
    handleTitleChange,
    handleContentChange,
    handleSubmitForm,
    taskModalForm,
  };
};
