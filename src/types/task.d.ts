interface ITask {
  id: number;
  description: string;
}

type TaskState = {
  tasks: ITask[];
};

type TaskAction = {
  type: string;
  task: ITask;
};

type DispatchTaskActionType = (args: TaskAction) => TaskAction;
