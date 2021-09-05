import {
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  makeStyles,
  IconButton,
  Tooltip,
  Switch,
} from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons";
import { ITask } from "../../types/task";

interface ToDoTableProps {
  rows?: ITask[];
}

const ToDoTable: React.FC<ToDoTableProps> = ({ rows = [] }) => {
  const classes = useStyles();

  const columns = [
    "#",
    "Title",
    "Content",
    "Start Date",
    "End Date",
    "Status",
    "Actions",
  ];

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns.map((col) => (
              <TableCell key={col}>{col}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((task, index) => (
            <TableRow key={task.id}>
              <TableCell component="th" scope="row">
                {index + 1}
              </TableCell>
              <TableCell>{task.title}</TableCell>
              <TableCell>{task.content}</TableCell>
              <TableCell>{task.startDate || "Not Assigned"}</TableCell>
              <TableCell>{task.dueDate || "Not Assigned"}</TableCell>
              <TableCell>
                <Tooltip title={`Status: ${task?.status?.name || ""}`}>
                  <Switch
                    checked={task?.status?.id === 1}
                    onChange={() => {}}
                  />
                </Tooltip>
              </TableCell>
              <TableCell>
                <Tooltip title="Edit Task">
                  <IconButton aria-label="delete">
                    <Edit color="primary" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Delete Task">
                  <IconButton aria-label="delete">
                    <Delete color="error" />
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ToDoTable;

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
