import { model, Schema } from 'mongoose';
import { StudentI, Subject } from '../interfaces/student';

const schemaSubject = new Schema<Subject>(
  {
    name: {
      type: String,
      required: true,
      lowercase: true
    },
    grades: { type: [Number], required: true }
  },
  { _id: false }
);

const schemaStudent = new Schema<StudentI>(
  {
    name: {
      type: String,
      required: true,
      lowercase: true
    },
    identification: { type: Number, required: true },
    subjects: { type: [schemaSubject], required: true }
  },
  { versionKey: false }
);

export default model('Student', schemaStudent);
