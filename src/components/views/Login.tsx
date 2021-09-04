import { useState } from "react";
import {
  Container,
  CssBaseline,
  Avatar,
  Typography,
  makeStyles,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import AuthForm from "../organisms/AuthForm";

import Image from "../../assets/images/background.jpeg";

type FormType = "LOGIN" | "REGISTER";

const Login = () => {
  const [formType, setFormType] = useState<FormType>("LOGIN");

  const classes = useStyles();

  return (
    <div className={classes.background}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {formType === "LOGIN" ? " Sign in" : "Sign up"}
          </Typography>
          <AuthForm formType={formType} setFormType={setFormType} />
        </div>
      </Container>
    </div>
  );
};

export default Login;

const useStyles = makeStyles((theme) => ({
  background: {
    display: "flex",
    margin: 0,
    backgroundImage: `url(${Image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    width: "100vw",
    overflow: "hidden",
  },
  paper: {
    marginTop: theme.spacing(8),
    backdropFilter: "blur(4px)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 20,
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
}));
