import { StatusDto } from "../../status/dto/status.dto";

export type TaskDto = {
  id?: number;
  title: string;
  content: string;
  startDate?: string;
  dueDate?: string;
  statusId?: number;
  status?: StatusDto;
};
