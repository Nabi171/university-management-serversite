import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import routes from './app/routes';
import { UserService } from './app/modules/users/user.service';

const app: Application = express();
app.use(cors());
//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Application routes

app.use('/api/v1/', routes);

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
