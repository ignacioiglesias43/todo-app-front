import {
  IconButton,
  TableCell,
  TableRow,
  Tooltip,
  Checkbox,
} from "@material-ui/core";
import { Edit, Delete } from "@material-ui/icons";
import { ITask } from "../../types/task";
import { useSingleTask } from "../../hooks/useSingleTask";

interface TaskProps {
  task: ITask;
  index: number;
}

const Task: React.FC<TaskProps> = ({ task }) => {
  const { checked, tooltip, handleChecked, openDelete, handleEdit } =
    useSingleTask(task);
  return (
    <TableRow style={{ textDecoration: checked ? "line-through" : "none" }}>
      <TableCell component="th" scope="row">
        {task.id}
      </TableCell>
      <TableCell>{task.title}</TableCell>
      <TableCell>{task.content}</TableCell>
      <TableCell>
        {task.startDate
          ? new Date(task.startDate).toDateString()
          : "Not Assigned"}
      </TableCell>
      <TableCell>
        {task.dueDate ? new Date(task.dueDate).toDateString() : "Not Assigned"}
      </TableCell>
      <TableCell>
        <Tooltip title={`Status: ${tooltip}`}>
          <Checkbox
            checked={checked}
            onChange={handleChecked}
            color="primary"
          />
        </Tooltip>
      </TableCell>
      <TableCell>
        <Tooltip title="Edit Task">
          <IconButton aria-label="edit" onClick={handleEdit}>
            <Edit color="secondary" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete Task">
          <IconButton aria-label="delete" onClick={openDelete}>
            <Delete color="error" />
          </IconButton>
        </Tooltip>
      </TableCell>
    </TableRow>
  );
};

export default Task;
