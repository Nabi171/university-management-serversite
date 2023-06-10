/* eslint-disable no-unused-expressions */

import { ErrorRequestHandler } from 'express';
import { IGenericErrorMessage } from '../../interfaces/error';
import config from '../../config';
import ApiError from '../../errors/ApiError';
import handleValidationerror from '../../errors/handleValidationerror';
import { errorlogger as errorlog } from '../../shared/logger';
import { ZodError } from 'zod';
import handleZodError from '../../errors/handleZodError';

const globalErrorHandler: ErrorRequestHandler = (error, req, res, next) => {
  config.env === 'development'
    ? console.log(`🐱‍🏍 globalErrorHandler ~~`, error)
    : errorlog.error(`🐱‍🏍 globalErrorHandler ~~`, error);

  let statusCode = 500;
  let message = 'Something went wrong !';
  let errorMessages: IGenericErrorMessage[] = [];

  if (error?.name === 'ValidationError') {
    const simplifiedError = handleValidationerror(error);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorMessages = simplifiedError.errorMessages;
  } else if (error instanceof ZodError) {
    const simplifiedError = handleZodError(error);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorMessages = simplifiedError.errorMessages;
  } else if (error instanceof ApiError) {
    statusCode = error?.statusCode;
    message = error.message;
    errorMessages = error?.message
      ? [
          {
            path: '',
            message: error?.message,
          },
        ]
      : [];
  } else if (error instanceof Error) {
    message = error?.message;
    errorMessages = error?.message
      ? [
          {
            path: '',
            message: error?.message,
          },
        ]
      : [];
  }

  res.status(statusCode).json({
    success: false,
    message,
    errorMessages,
    stack: config.env !== 'production' ? error?.stack : undefined,
  });

  next();
};

export default globalErrorHandler;

// const globalErrorHandler = (err, req: Request, res: Response, next: NextFunction) => {
//   // res.status(400).json({err:err})
//   // next()

//   let statusCode = 500;
//   let message = 'Something went wrong!'
//   let errorMessages: IGenericErrorMessage[] = []

// if(err?.name==='ValidationError'){
//   const simplifiedError=handleValidationerror(err)
//   statusCode=simplifiedError.statusCode;
//   message=simplifiedError.message;
//   errorMessages=simplifiedError.errorMessages
// }else if(error instanceof Error){
// message=error?.message
// errorMessages=error?.message?[
//   {
//     pa
