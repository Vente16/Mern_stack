import { model, Schema } from 'mongoose';
import { StudentI, Subject } from '../interfaces/student';

const schemaSubject = new Schema<Subject>(
  {
    name: {
      type: String,
      required: true,
      lowercase: true, // Always convert `test` to lowercase
    },
    grades: { type: [Number], required: true },
  },
  { _id: false }
);

const schemaStudent = new Schema<StudentI>(
  {
    name: {
      type: String,
      required: true,
      lowercase: true, // Always convert `test` to lowercase
    },
    identification: { type: Number, required: true },
    subjects: { type: [schemaSubject], required: true },
  },
  { versionKey: false }
);

export default model('Student', schemaStudent);
