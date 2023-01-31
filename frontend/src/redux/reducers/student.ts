/* eslint-disable */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { StudentI, Subject } from '@interfaces/studentInterfaces';

export const initialState: StudentI = {
  name: '',
  identification: 0,
  subjects: []
};

export const studentSlice = createSlice({
  name: 'student',
  initialState,
  reducers: {
    setStudent: (state, action: PayloadAction<StudentI>) => {
      state = { ...state, ...action.payload };
      return state;
    },
    setSubjects: (state, action: PayloadAction<Subject[]>) => {
      state = { ...state, subjects: action.payload };
      return state;
    }
  }
});

export default studentSlice.reducer;
