import { useAppSelector } from "../store/hooks";
import { RootState } from "../store/index";
import { useTasks } from "./useTasks";

export const useDashboard = () => {
  const { userInfo } = useAppSelector((state: RootState) => state.authReducer);
  const tasks = useTasks();

  return {
    userInfo,
    ...tasks,
  };
};
