import request from "../request";
import { TaskDto } from "./dto/task.dto";

export const createTask = (token: string, data: TaskDto) =>
  request<TaskDto>({
    method: "POST",
    url: "/tasks",
    headers: {
      Authorization: "Bearer " + token,
    },
    data,
  });

export const getAllTasks = (token: string) =>
  request<TaskDto[]>({
    method: "GET",
    url: "/tasks",
    headers: {
      Authorization: "Bearer " + token,
    },
  });

export const getSingleTask = (token: string, id: number) =>
  request<TaskDto>({
    method: "GET",
    url: `/tasks/${id}`,
    headers: {
      Authorization: "Bearer " + token,
    },
  });

export const updateTask = (token: string, id: number, data: TaskDto) =>
  request<TaskDto>({
    method: "PATCH",
    url: `/tasks/${id}`,
    headers: {
      Authorization: "Bearer " + token,
    },
    data,
  });

export const deleteTask = (token: string, id: number) =>
  request<TaskDto>({
    method: "DELETE",
    url: `/tasks/${id}`,
    headers: {
      Authorization: "Bearer " + token,
    },
  });
