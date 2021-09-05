import { CssBaseline, Container, makeStyles, Button } from "@material-ui/core";
import { Add } from "@material-ui/icons";

import { useDashboard } from "../../hooks/useDashboard";
import CustomAppBar from "../molecules/CustomAppBar";
import ToDoTable from "../organisms/ToDoTable";

const Dashboard: React.FC = () => {
  const classes = useStyles();
  const { tasks } = useDashboard();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <CustomAppBar />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="xl" className={classes.container}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<Add />}
            className={classes.mainBtn}
          >
            Create task
          </Button>
          <ToDoTable rows={tasks} />
        </Container>
      </main>
    </div>
  );
};

export default Dashboard;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
    overflowX: "hidden",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  mainBtn: {
    marginBottom: 20,
    alignSelf: "flex-end",
  },
}));
