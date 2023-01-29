export interface Subject {
  name: string;
  grades: number[];
}

export interface StudentI {
  name: string;
  identification: number;
  subjects: Subject[];
}
