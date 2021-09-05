import "date-fns";
import DateFnsUtils from "@date-io/date-fns";

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  makeStyles,
} from "@material-ui/core";

import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import { useTaskModal } from "../../hooks/useTaskModal";

import { capitalizeText } from "../../utils/capitalizeText";

const TaskModal = () => {
  const classes = useStyles();

  const {
    closeModal,
    handleEndDateChange,
    handleStartDateChange,
    handleSubmitForm,
    handleTitleChange,
    handleContentChange,
    show,
    type,
    taskModalForm,
  } = useTaskModal();

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Dialog open={show} aria-labelledby="form-dialog-title" fullWidth>
        <DialogTitle id="form-dialog-title">
          {capitalizeText(type)} a Task
        </DialogTitle>
        <DialogContent className={classes.container}>
          <TextField
            autoFocus
            variant="outlined"
            margin="dense"
            id="title"
            label="Title"
            type="text"
            value={taskModalForm.title}
            onChange={handleTitleChange}
            fullWidth
          />
          <TextField
            variant="outlined"
            margin="dense"
            id="content"
            label="Description"
            type="text"
            fullWidth
            multiline
            value={taskModalForm.content}
            onChange={handleContentChange}
            minRows={4}
            maxRows={6}
          />
          <div className={classes.datePickers}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              inputVariant="outlined"
              id="date-picker-inline"
              label="Start Date"
              value={taskModalForm.startDate}
              onChange={handleStartDateChange}
              autoOk
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              inputVariant="outlined"
              id="date-picker-inline-end"
              label="Due Date"
              value={taskModalForm.dueDate}
              autoOk
              onChange={handleEndDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={closeModal}
            color="inherit"
            className={classes.cancelBtn}
          >
            Cancel
          </Button>
          <Button onClick={handleSubmitForm} color="primary">
            {type}
          </Button>
        </DialogActions>
      </Dialog>
    </MuiPickersUtilsProvider>
  );
};

export default TaskModal;

const useStyles = makeStyles((theme) => ({
  container: {
    paddingHorizontal: 25,
  },
  cancelBtn: {
    color: theme.palette.error.main,
  },
  datePickers: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
}));
