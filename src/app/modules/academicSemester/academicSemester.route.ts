import express from 'express';
import { AcademicSemesterValidation } from './acdemicSemester.validation';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemesterController } from './academicSemester.controller';

const router = express.Router();

router.post(
  '/create-semester',
  validateRequest(AcademicSemesterValidation.createAcademicSemesterZodSchema),
  AcademicSemesterController.createSemester
);

router.get('/:id', AcademicSemesterController.getSingleSemester);

// router.patch(
//   '/:id',

//   AcademicSemesterController.updateSemester
// );
router.patch(
  '/:id',
  validateRequest(AcademicSemesterValidation.updateAcademicSemesterZodSchema),
  AcademicSemesterController.updateSemester
);

router.get('/', AcademicSemesterController.getAllSemesters);

// router.patch(
//   '/:id',
//   validateRequest(AcademicSemesterValidation.updateAcademicSemesterZodSchema),
//   AcademicSemesterController.updateSemester
// );

export const AcademicSemesterRoutes = router;
