import { TextField } from "@material-ui/core";
import { ILoginForm } from "../../constants/initialLoginForm";

interface LoginFormProps {
  formFields: ILoginForm;
  setValues: (
    key: keyof ILoginForm
  ) => (e: React.ChangeEvent<HTMLInputElement>) => void;
  dataTestId: string;
}

const LoginForm = ({ formFields, setValues, dataTestId }: LoginFormProps) => {
  return (
    <div data-testid={dataTestId}>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="email"
        label="E-Mail or Username"
        name="email"
        autoComplete="email"
        value={formFields.email}
        onChange={setValues("email")}
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="password"
        label="Password"
        name="password"
        autoComplete="current-password"
        value={formFields.password}
        type="password"
        onChange={setValues("password")}
      />
    </div>
  );
};

export default LoginForm;
