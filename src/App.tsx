import { useAppSelector } from "./store/hooks";
import { RootState } from "./store/index";
import Dashboard from "./components/views/Dashboard";
import Login from "./components/views/Login";

const App = () => {
  const { token } = useAppSelector((state: RootState) => state.authReducer);
  const isSignedIn = token.length > 0;

  return isSignedIn ? <Dashboard /> : <Login />;
};

export default App;
