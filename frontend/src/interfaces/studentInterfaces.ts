/* eslint-disable */
export interface Subject {
  id?: string;
  name: string;
  grades: string[];
}

export interface StudentI {
  _id?: string;
  name: string;
  identification: number;
  subjects: Subject[];
}
