import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { RootState } from "../store/index";
import { useTasks } from "./useTasks";
import {
  updateTaskModalType,
  updateTaskModalVisible,
} from "../store/taskModal/actionCreators";

export const useDashboard = () => {
  const { userInfo } = useAppSelector((state: RootState) => state.authReducer);
  const dispatch = useAppDispatch();
  const tasks = useTasks();

  const handleOpenTaskModal = () => {
    dispatch(updateTaskModalType("CREATE"));
    dispatch(updateTaskModalVisible(true));
  };

  useEffect(() => {
    // TODO: getUserInfo
    const getUserInfo = () => {};
    if (userInfo === null) {
      getUserInfo();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    ...tasks,
    handleOpenTaskModal,
  };
};
