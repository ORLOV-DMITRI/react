import { Employee } from "@prisma/client";
import { createSlice } from "@reduxjs/toolkit";
import { employeeApi } from "../../services/employee";
import { RootState } from "../../store";

type InitialState = {
  employees: Employee[] | null;
};
const initialState: InitialState = {
  employees: null,
};

export const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      employeeApi.endpoints.getAllEmployees.matchFulfilled,
      (state, { payload }) => {
        state.employees = payload;
      },
    );
  },
});

export const actions = employeeSlice.actions;
export default employeeSlice.reducer;

export const selectEmployees = (state: RootState) => state.employee.employees;
