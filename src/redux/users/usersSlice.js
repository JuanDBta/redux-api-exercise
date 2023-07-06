import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  isLoading: false,
  error: undefined,
};

const usersSlice = createSlice({
  name: '',
  initialState,
  extrareducers: {},
});

export const { } = usersSlice.actions;
export default usersSlice.reducer;
