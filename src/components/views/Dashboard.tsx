import { RootState } from "../../store/index";
import { useAppSelector } from "../../store/hooks";

const Dashboard: React.FC = () => {
  const state = useAppSelector((state: RootState) => state.taskReducer);

  console.log(state);

  return <div>Dashboard</div>;
};

export default Dashboard;
