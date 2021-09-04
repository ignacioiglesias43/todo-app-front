import { Grid, TextField } from "@material-ui/core";
import { ISignupForm } from "../../constants/initialSignupForm";

interface SignupFormProps {
  formFields: ISignupForm;
  setValues: (
    key: keyof ISignupForm
  ) => (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SignupForm = ({ formFields, setValues }: SignupFormProps) => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            value={formFields.name}
            onChange={setValues("name")}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="lastname"
            label="Lastname"
            name="lastname"
            autoComplete="family-name"
            value={formFields.lastName}
            onChange={setValues("lastName")}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="E-Mail"
            name="email"
            autoComplete="email"
            value={formFields.email}
            onChange={setValues("email")}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            value={formFields.userName}
            onChange={setValues("userName")}
          />
        </Grid>
      </Grid>
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
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="repeatPassword"
        label="Repeat Password"
        name="password"
        autoComplete="current-password"
        value={formFields.repeatPassword}
        type="password"
        onChange={setValues("repeatPassword")}
      />
    </>
  );
};

export default SignupForm;
