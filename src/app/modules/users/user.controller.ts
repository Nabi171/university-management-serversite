// import { RequestHandler } from 'express'
// import { UserService } from './user.service'

import { RequestHandler } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { NextFunction, Request, Response } from 'express';
import { UserService } from './user.service';
import sendResponse from '../../../shared/sendResponse';
import { IUser } from './user.interface';
import httpStatus from 'http-status';
// const createUser:RequestHandler = async (req, res,next) => {
//   try {

//     const { user } = req.body
//     const result = await UserService.create

const createUser: RequestHandler = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { user } = req.body;
    const result = await UserService.createUser(user);

    sendResponse<IUser>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'user created successfully!',
      data: result,
    });
    next();
  }
);

export const UserController = {
  createUser,
};
