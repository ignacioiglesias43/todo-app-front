import {
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  makeStyles,
} from "@material-ui/core";
import { ITask } from "../../types/task";
import Task from "../molecules/Task";

interface ToDoTableProps {
  rows?: ITask[];
}

const ToDoTable: React.FC<ToDoTableProps> = ({ rows = [] }) => {
  const classes = useStyles();

  const columns = [
    "#",
    "Title",
    "Description",
    "Start Date",
    "Due Date",
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
            <Task task={task} index={index} key={task.id} />
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
