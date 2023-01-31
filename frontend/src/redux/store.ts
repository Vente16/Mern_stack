/* eslint-disable */
import { configureStore } from '@reduxjs/toolkit';

import studentReducer from './reducers/student';

const store = configureStore({
  reducer: {
    student: studentReducer
  }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
