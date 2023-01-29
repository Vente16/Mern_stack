import { Application } from 'express';

import { healthCheck } from './controllers/healthCheck';
import { getAllStudents, saveGrages } from './controllers/students';
import { studentValidation } from './utils/validations/student';

export const init = (app: Application): void => {
  app.get('/', healthCheck);
  app.get('/students', getAllStudents);
  app.post('/students', studentValidation, saveGrages);
};
