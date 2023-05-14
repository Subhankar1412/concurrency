import express, { Application, Request, Response } from 'express';

export class server {
    public app: Application = express();
    constructor() {
        this.initRoute();
    }
    initRoute() {
        this.app.get('/', (req: Request, res: Response) => {
            res.send("success");
        })
    }
}