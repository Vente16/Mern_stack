/* eslint-disable */
import { ApiResponse } from 'apisauce';
import api from '@config/api';
import { StudentI } from '@interfaces/studentInterfaces';

//Promise<ApiResponse<any, any>>
export interface StudentsList {
  students: StudentI[];
}

export interface StudentStorage {
  student: StudentI;
}

export const getStudents = (): Promise<
  ApiResponse<StudentsList, { message: string }>
> => api.get('/students');

export const saveStudent = (
  student: StudentI
): Promise<ApiResponse<StudentStorage, { message: string }>> =>
  api.post('/students', student);
