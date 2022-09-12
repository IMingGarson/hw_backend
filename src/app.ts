import * as bodyParser from "body-parser";
import express from 'express';
import { UserController } from "./controllers/user.controller";
import 'dotenv/config';

class App {
    public express: express.Application;
    public userController: UserController;

    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
        this.userController = new UserController();
    }

    private middleware(): void {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }

    private routes(): void {
        this.express.get('/api/users', (req, res) => {
            this.userController.getUsers().then(data => res.json(data));
        });
    }
}

export default new App().express;