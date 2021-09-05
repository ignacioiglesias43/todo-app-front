import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { RootState } from "../store/index";
import { getAllTasks } from "../api/task/services";
import { updateTasks } from "../store/tasks/actionCreators";

export const useTasks = () => {
  const [isLoading, setIsLoading] = useState(false);
  const token = useAppSelector((state: RootState) => {
    const saved = localStorage.getItem("JWT");
    const initialValue = saved!;

    return initialValue || state.authReducer.token;
  });
  const { tasks } = useAppSelector((state: RootState) => state.taskReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchAllTasks = async () => {
      try {
        setIsLoading(true);
        const result = await getAllTasks(token);

        dispatch(updateTasks([...result.data]));
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    fetchAllTasks();
  }, [dispatch, token]);

  return {
    tasks,
    isLoading,
  };
};
