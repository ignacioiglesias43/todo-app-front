import request from "../request";
import { StatusDto } from "./dto/status.dto";

export const getAllStatuses = (token: string) =>
  request<StatusDto[]>({
    method: "GET",
    url: "status",
    headers: {
      Authorization: "Bearer " + token,
    },
  });

export const getSingleStatus = (token: string, id: number) =>
  request<StatusDto>({
    method: "GET",
    url: `/status/${id}`,
    headers: {
      Authorization: "Bearer " + token,
    },
  });
