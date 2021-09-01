import { configureStore, ThunkAction } from "@reduxjs/toolkit";
import { Action, combineReducers } from "redux";

import taskReducer from "./tasks/taskReducer";
import authReducer from "./auth/authReducer";

const reducers = combineReducers({
  taskReducer,
  authReducer,
});

const store = configureStore({
  reducer: reducers,
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
