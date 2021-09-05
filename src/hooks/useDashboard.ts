import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { RootState } from "../store/index";
import { useTasks } from "./useTasks";
import { getUserInfoService } from "../api/user/services";
import { AuthUserDto } from "../api/user/dto/auth-user.dto";
import { updateUserInfo } from "../store/auth/actionCreators";
import {
  updateTaskModalType,
  updateTaskModalVisible,
} from "../store/taskModal/actionCreators";

export const useDashboard = () => {
  const { userInfo } = useAppSelector((state: RootState) => state.authReducer);
  const dispatch = useAppDispatch();
  const tasks = useTasks();
  const token = localStorage.getItem("JWT");

  const handleOpenTaskModal = () => {
    dispatch(updateTaskModalType("CREATE"));
    dispatch(updateTaskModalVisible(true));
  };

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const result = await getUserInfoService(token!);
        if (result) {
          const user: AuthUserDto = result.data;

          dispatch(updateUserInfo(user));
        }
      } catch (error: any) {
        console.log(error?.response);
      }
    };
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
