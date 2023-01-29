import { body } from 'express-validator';

export const studentValidation = [
  body('name')
    .exists({ checkFalsy: true })
    .withMessage('Student name is required')
    .isString()
    .withMessage('Student name should be string')
    .isLength({ min: 3, max: 100 })
    .withMessage('Student name must be in a length between 3 and 100'),
  body('identification')
    .exists({ checkFalsy: true })
    .withMessage('identification is required')
    .isNumeric()
    .withMessage('identification should be number')
    .isLength({ min: 10 })
    .withMessage('identification should be at least 10 numbers'),
  body('subjects')
    .exists({ checkFalsy: true })
    .withMessage('Student subjects are required')
    .isArray()
    .withMessage('Student subjects must be an array')
    .notEmpty()
    .withMessage('Student subject can not be empty'),
  body('subjects.*.name')
    .exists({ checkFalsy: true })
    .withMessage('subject name is required')
    .isString()
    .withMessage('subject name should be string')
    .isLength({ min: 3, max: 100 })
    .withMessage('subject name must be in a length between 3 and 100'),
  body('subjects.*.grades')
    .exists({ checkFalsy: true })
    .withMessage('subject grades are required')
    .isArray()
    .withMessage('subject grades must be an array')
    .notEmpty()
    .withMessage('subject subject can not be empty'),
  body('subjects.*.grades.*')
    .isNumeric()
    .withMessage('subject grades must be an array of numbers')
];
