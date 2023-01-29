import { NextFunction, Request, Response } from 'express';
import HttpStatus from 'http-status-codes';
import { validationResult } from 'express-validator';

import { saveUser, getStudents } from '../services/students';
import { StudentI } from '../interfaces/student';

export function getAllStudents(
  _: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> {
  return getStudents()
    .then((students: StudentI[]) =>
      res.status(HttpStatus.OK).send({ students })
    )
    .catch(next);
}

export function saveGrages(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(HttpStatus.BAD_REQUEST).send({ errors: errors.array() });
  }

  const student: StudentI = req.body;

  return saveUser(student)
    .then((student: StudentI) => res.status(HttpStatus.OK).send({ student }))
    .catch(next);
}
