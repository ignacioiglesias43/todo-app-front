import {
  makeStyles,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@material-ui/core";
import Transition from "../atoms/Transition";
import { WarningRounded } from "@material-ui/icons";
import { useConfirmDialog } from "../../hooks/useConfirmDialog";

const ConfirmDialog = () => {
  const classes = useStyles();
  const { visible, handleClose, handleDelete, task } = useConfirmDialog();

  return (
    <Dialog
      open={visible}
      TransitionComponent={Transition}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <WarningRounded
        id="alert-dialog-title"
        className={classes.icon}
        color="error"
      />
      <DialogTitle id="alert-dialog-title" className={classes.text}>
        Delete task
      </DialogTitle>
      <DialogContent>
        <DialogContentText
          id="alert-dialog-description"
          className={classes.text}
        >
          {`Are you sure you want to delete the following task: ${
            task?.title || ""
          }?`}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary" autoFocus>
          Cancel
        </Button>
        <Button
          onClick={handleDelete}
          color="inherit"
          autoFocus
          className={classes.delete}
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;

const useStyles = makeStyles((theme) => ({
  icon: {
    alignSelf: "center",
    marginTop: 20,
    fontSize: "3rem",
  },
  text: {
    textAlign: "center",
  },
  delete: {
    color: theme.palette.error.main,
  },
}));
