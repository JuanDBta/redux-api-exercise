import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchUserData = createAsyncThunk('data/fetchUserData', async (objectId) => {
  try {
    const response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error fetching user data');
  }
});

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    userData: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.isLoading = false;
        const newData = action.payload;
        const existingIdsSet = new Set(state.userData.map((data) => data.objectID));
        const filteredData = [newData].flat().filter((data) => !existingIdsSet.has(data.objectID));
        state.userData.push(...filteredData);
        state.userData.sort((a, b) => a.objectID - b.objectID);
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default dataSlice.reducer;
