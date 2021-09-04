import { TextField } from "@material-ui/core";
import { ILoginForm } from "../../constants/initialLoginForm";

interface LoginFormProps {
  formFields: ILoginForm;
  setValues: (
    key: keyof ILoginForm
  ) => (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const LoginForm = ({ formFields, setValues }: LoginFormProps) => {
  return (
    <>
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
    </>
  );
};

export default LoginForm;
