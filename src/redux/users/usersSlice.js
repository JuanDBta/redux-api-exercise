import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  try {
    const response = await fetch('https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=Vincent%20VanGogh');
    const data = await response.json();
    return data.objectIDs; // Assuming 'objectIDs' is the property containing the user data
  } catch (error) {
    throw new Error('Error fetching users');
  }
});

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    isLoading: false,
    error: null, // Use null instead of undefined for error field
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
        state.error = null; // Set error to null when the fetch is initiated
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default usersSlice.reducer;
