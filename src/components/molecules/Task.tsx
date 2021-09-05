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

const Task: React.FC<TaskProps> = ({ task, index }) => {
  const { checked, tooltip, handleChecked } = useSingleTask(task);
  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {index + 1}
      </TableCell>
      <TableCell>{task.title}</TableCell>
      <TableCell>{task.content}</TableCell>
      <TableCell>{task.startDate || "Not Assigned"}</TableCell>
      <TableCell>{task.dueDate || "Not Assigned"}</TableCell>
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
          <IconButton aria-label="delete">
            <Edit color="secondary" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete Task">
          <IconButton aria-label="delete">
            <Delete color="error" />
          </IconButton>
        </Tooltip>
      </TableCell>
    </TableRow>
  );
};

export default Task;
