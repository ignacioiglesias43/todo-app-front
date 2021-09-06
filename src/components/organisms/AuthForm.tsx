import { Button, Grid, Link, makeStyles } from "@material-ui/core";
import { useAuthForm } from "../../hooks/useAuthForm";
import LoginForm from "../molecules/LoginForm";
import SignupForm from "../molecules/SignupForm";

interface AuthFormProps {
  formType: "LOGIN" | "REGISTER";
  setFormType: React.Dispatch<React.SetStateAction<FormType>>;
}

const AuthForm = ({ formType, setFormType }: AuthFormProps) => {
  const { formFields, submitForm, setValues } = useAuthForm(formType);

  const classes = useStyles();

  const handleFormType = () =>
    setFormType(formType === "REGISTER" ? "LOGIN" : "REGISTER");

  return (
    <form
      className={classes.form}
      noValidate
      onSubmit={submitForm}
      data-testid="Form"
    >
      {formType === "LOGIN" ? (
        <>
          <LoginForm
            formFields={formFields}
            setValues={setValues}
            dataTestId="LoginForm"
          />
        </>
      ) : (
        <SignupForm
          formFields={formFields}
          setValues={setValues}
          dataTestId="SignupForm"
        />
      )}
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
        onClick={submitForm}
      >
        {formType === "LOGIN" ? "Sign In" : "Sign Up"}
      </Button>
      <Grid container justifyContent="flex-end">
        <Grid item>
          <Link variant="body2" onClick={handleFormType}>
            {formType === "LOGIN"
              ? "Don't have an account? Sign Up"
              : "Already have an account? Sign In"}
          </Link>
        </Grid>
      </Grid>
    </form>
  );
};

export default AuthForm;
const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
