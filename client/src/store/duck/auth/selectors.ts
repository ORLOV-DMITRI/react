import { RootState } from "../../store";

export const selectors = {
  selectIsAuth: (state: RootState) => state.auth.isAuthenticated,
  selectUser: (state: RootState) => state.auth.user,
};
