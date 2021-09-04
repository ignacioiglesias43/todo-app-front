import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
  Button,
  makeStyles,
} from "@material-ui/core";
import { WarningRounded } from "@material-ui/icons";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { RootState } from "../../store/index";
import Transition from "../atoms/Transition";
import {
  updateModalVisible,
  updateModalMessage,
  updateModalTitle,
} from "../../store/modal/actionCreators";

const ModalDialog = () => {
  const { visible, title, message, iconColor } = useAppSelector(
    (state: RootState) => state.modalReducer
  );

  const dispatch = useAppDispatch();
  const classes = useStyles();

  const handleClose = () => {
    dispatch(updateModalVisible(false));
    dispatch(updateModalMessage(""));
    dispatch(updateModalTitle(""));
  };

  return (
    <Dialog
      open={visible}
      TransitionComponent={Transition}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <WarningRounded
        id="alert-dialog-title"
        className={`${classes.icon} ${
          iconColor !== "error" ? classes.warning : ""
        }`}
        color={iconColor}
      />
      <DialogTitle id="alert-dialog-title" className={classes.text}>
        {title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText
          id="alert-dialog-description"
          className={classes.text}
        >
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary" autoFocus>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalDialog;

const useStyles = makeStyles((theme) => ({
  icon: {
    alignSelf: "center",
    marginTop: 20,
    fontSize: "3rem",
  },
  text: {
    textAlign: "center",
  },
  warning: {
    color: theme.palette.warning.main,
  },
}));
