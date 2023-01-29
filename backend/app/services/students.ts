import Student from '../models/student';
import { StudentI } from '../interfaces/student';

export function getStudents(): Promise<StudentI[]> {
  return Student.find({}).exec();
}
export function saveUser(student: StudentI): Promise<StudentI> {
  const newStudent = new Student(student);
  return newStudent.save();
}
