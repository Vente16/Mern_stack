import { Application } from 'express';

import { healthCheck } from './controllers/healthCheck';
import { getAllStudents, saveGrages } from './controllers/students';
import { userDataValidateChainMethod } from './utils/validations/student';

export const init = (app: Application): void => {
  app.get('/', healthCheck);
  app.post('/students', userDataValidateChainMethod, saveGrages);
  app.get('/students', getAllStudents);
};
