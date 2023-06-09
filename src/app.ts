import express, { Application, Request, Response } from 'express';
import cors from 'cors';
// import userService from './app/modules/users/user.service'
// import usersRouter from './app/modules/users/user.route'
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import routes from './app/routes';
// import { UserRoutes } from './app/modules/users/user.route'
import { UserService } from './app/modules/users/user.service';

// import { AcademicSemesterRoutes } from './app/modules/academicSemester/academicSemester.route'
const app: Application = express();
// const port = 3000
app.use(cors());
//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Application routes

// app.use('/api/v1/users/', UserRoutes)
// app.use('/api/v1/academic-semesters/', AcademicSemesterRoutes)
app.use('/api/v1/', routes);

// //testing
// app.get('/', (req: Request, res: Response,next:NextFunction) => {
// throw new Error("Testing error logger")
// // Promise.reject(new Error('Unhandled Promise Rejection'))
// // next('Ore baba error')
// })
//global err handeling
app.use(globalErrorHandler);
app.get('/', async (req: Request, res: Response) => {
  await UserService.createUser({
    id: '999',
    password: '1234',
    role: 'student',
  });
  res.send('Working Successfully');
});

export default app;
