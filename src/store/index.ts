import { configureStore } from "@reduxjs/toolkit";

import { mainApi } from "./services/main";
import { authApi } from "./services/auth";
import authReducer, { loginStepReduser } from "./slices/auth/auth";
import { useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    [mainApi.reducerPath]: mainApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    auth: authReducer,
    step: loginStepReduser,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(mainApi.middleware)
      .concat(authApi.middleware),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
