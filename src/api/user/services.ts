import request from "../request";
import { AuthCredentialsDto } from "./dto/auth-credentials.dto";
import { AuthUserDto } from "./dto/auth-user.dto";
import { CreateUserDto } from "./dto/create-user.dto";

export const login = (data: AuthCredentialsDto) =>
  request<AuthUserDto>({ method: "POST", url: "/auth/login", data });

export const signup = (data: AuthUserDto) =>
  request<AuthUserDto>({ method: "POST", url: "/auth/signup", data });

export const updateUserInfoService = (
  id: number,
  data: CreateUserDto,
  token: string
) =>
  request<AuthUserDto>({
    method: "PATCH",
    url: "/users/" + id,
    data,
    headers: {
      Authorization: "Bearer " + token,
    },
  });

export const getUserInfoService = (token: string) =>
  request<AuthUserDto>({
    method: "GET",
    url: "/users/own-info",
    headers: {
      Authorization: "Bearer " + token,
    },
  });
