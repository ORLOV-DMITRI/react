import { configureStore } from "@reduxjs/toolkit";
import { listenerMiddleware } from "../middleware/auth";
import auth from "./duck/auth/slice";
import employee from "./duck/employees/slice";
import { api } from "./services/api";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth,
    employee,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(api.middleware)
      .prepend(listenerMiddleware.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
