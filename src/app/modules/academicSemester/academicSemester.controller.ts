import httpStatus from 'http-status';
import sendResponse from '../../../shared/sendResponse';

import { NextFunction, Request, Response } from 'express';
import { IAcademicSemester } from './academicSemester.interface';
import { AcademicSemesterService } from './academicSemester.service';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import { paginationFields } from '../../../constants/pagination';

const createSemester = catchAsync(async (req: Request, res: Response) => {
  const { ...academicSemesterData } = req.body;
  const result = await AcademicSemesterService.createSemester(
    academicSemesterData
  );

  sendResponse<IAcademicSemester>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Aademic semester created successfully!',
    data: result,
  });
});

const getAllSemesters = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const filters = pick(req.query, ['searchTerm', 'title', 'code', 'year']);
    const paginationOptions = pick(req.query, paginationFields);

    console.log(filters);

    const result = await AcademicSemesterService.getAllSemesters(
      filters,
      paginationOptions
    );

    sendResponse<IAcademicSemester[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Semester retrived successfully!',
      meta: result.meta,
      data: result.data,
    });
    next();
  }
);

export const AcademicSemesterController = {
  createSemester,
  getAllSemesters,
};
