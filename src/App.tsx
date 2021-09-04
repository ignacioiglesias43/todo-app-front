import { RootState } from "./store/index";
import { useAppSelector } from "./store/hooks";

import Dashboard from "./components/views/Dashboard";
import Login from "./components/views/Login";

const App = () => {
  const token = useAppSelector((state: RootState) => {
    const saved = localStorage.getItem("JWT");
    const initialValue = saved!;

    return initialValue || state.authReducer.token;
  });

  return token.length > 0 ? <Dashboard /> : <Login />;
};

export default App;
