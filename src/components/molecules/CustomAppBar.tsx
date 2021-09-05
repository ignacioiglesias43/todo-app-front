import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  makeStyles,
  Avatar,
} from "@material-ui/core";
import { ExitToApp } from "@material-ui/icons";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { updateToken } from "../../store/auth/actionCreators";
import { RootState } from "../../store/index";

const CustomAppBar = () => {
  const classes = useStyles();
  const { userInfo } = useAppSelector((state: RootState) => state.authReducer);
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    localStorage.removeItem("JWT");
    dispatch(updateToken(""));
  };
  return (
    <AppBar position="absolute" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          className={classes.title}
        >
          To-Do List
        </Typography>
        <div className={classes.avatar}>
          <Avatar className={classes.avatarImg} />
          <Typography component="span" variant="h6" color="inherit" noWrap>
            {userInfo?.userName || userInfo?.email}
          </Typography>
        </div>
        <IconButton onClick={handleLogout} color="inherit">
          <ExitToApp color="inherit" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;
const useStyles = makeStyles((theme) => ({
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: theme.palette.primary.dark,
  },
  title: {
    flexGrow: 1,
  },
  avatar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  avatarImg: {
    marginRight: 5,
  },
}));
