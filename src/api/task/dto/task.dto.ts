import { StatusDto } from "../../status/dto/status.dto";

export type TaskDto = {
  id?: number;
  title: string;
  content: string;
  startDate?: string | null;
  dueDate?: string | null;
  statusId?: number;
  status?: StatusDto;
};
