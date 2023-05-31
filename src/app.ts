import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import userService from './app/modules/users/user.service'
import usersRouter from './app/modules/users/users.route'
const app: Application = express()
// const port = 3000
app.use(cors())
//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Application routes

app.use('/api/v1/users/', usersRouter)

//testing
app.get('/', async (req: Request, res: Response) => {
  await userService.createUser({
    id: '999',
    password: '1234',
    role: 'student',
  })
  res.send('Working Successfully')
})

export default app
