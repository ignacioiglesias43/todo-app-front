import { StatusDto } from "../api/status/dto/status.dto";
interface ITask {
  id?: number;
  title: string;
  content: string;
  startDate?: string;
  dueDate?: string;
  statusId?: number;
  status?: StatusDto;
}

type TaskState = {
  tasks: ITask[];
};

type TaskAction = {
  type: string;
  task?: ITask;
  tasks?: Itask[];
};

type DispatchTaskActionType = (args: TaskAction) => TaskAction;
