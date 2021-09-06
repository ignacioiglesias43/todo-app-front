import {
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  makeStyles,
  TablePagination,
} from "@material-ui/core";
import { ITask } from "../../types/task";
import Task from "../molecules/Task";
import { usePagination } from "../../hooks/usePagination";

interface ToDoTableProps {
  rows?: ITask[];
}

const ToDoTable: React.FC<ToDoTableProps> = ({ rows = [] }) => {
  const classes = useStyles();

  const columns = [
    "#ID",
    "Title",
    "Description",
    "Start Date",
    "Due Date",
    "Status",
    "Actions",
  ];

  const { page, handleChangePage } = usePagination(rows.length);

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
          {rows.slice(page * 10, page * 10 + 10).map((task, index) => (
            <Task task={task} key={task.id} />
          ))}
        </TableBody>
      </Table>
      <TablePagination
        component="div"
        page={page}
        count={rows.length}
        rowsPerPage={10}
        rowsPerPageOptions={[]}
        onPageChange={handleChangePage}
      />
    </TableContainer>
  );
};

export default ToDoTable;

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
