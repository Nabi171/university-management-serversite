
import express, { Application, Request, Response } from "express";
import cors from "cors";
const app: Application = express()
// const port = 3000
app.use(cors());
//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//testing
app.get('/', async (req: Request, res: Response) => {
    res.send('Working Successfully')
})

export default app;

// mongodb+srv://university-admin :XxlJUmVHJQenWPwN@cluster0.97bld.mongodb.net/university-management?retryWrites=true&w=majority