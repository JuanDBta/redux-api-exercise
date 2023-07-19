import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './users/usersSlice';
import dataReducer from './users/dataSlice';

const store = configureStore({
  reducer: {
    users: usersReducer,
    data: dataReducer,
  },
});

export default store;
