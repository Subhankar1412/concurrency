import express, { Application, Request, Response } from 'express';
import asyncInOut from './asyncInputOutput';
import myfunc from './asyncAwait';
const app: Application = express();


// app.get('/', function (req: Request, res: Response) {

// })

asyncInOut();

myfunc();

// const PORT = 4001;
// app.listen(PORT, function () {
//     console.log(`App is runnig at port ${PORT}...`);

// })