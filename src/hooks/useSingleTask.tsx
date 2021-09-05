import { updateTaskService } from "../api/task/services";
import { useState } from "react";
import { ITask } from "../types/task";

export const useSingleTask = (task: ITask) => {
  const [checked, setChecked] = useState(task?.status?.id === 1);
  const [tooltip, setTooltip] = useState(task?.status?.name || "");
  const token = localStorage.getItem("JWT")!;
  const handleChecked = async () => {
    try {
      const r = await updateTaskService(token, task?.id!, {
        ...task,
        statusId: checked ? 2 : 1,
      });
      setChecked(r.data.status?.id === 1);
      setTooltip(r.data.status?.name! || "");
    } catch (error) {
      console.log("error", error);
    }
  };

  return {
    checked,
    tooltip,
    handleChecked,
  };
};
