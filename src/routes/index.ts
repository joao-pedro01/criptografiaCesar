import express, { Application, Request, Response, NextFunction } from "express";
import userRoutes from "./userRoutes";
import criptografiaRoutes from "./criptografiaRoutes";
//import jwt from "jsonwebtoken";
//import { /*dd,*/ verifyJWT } from "../controllers/functions";

const routes = (app: Application) => {
    // rotas principais
    app.route('/').get((req: Request, res: Response) => {
        res.status(200).json({titulo: "Teste"});
    });
    app.route('/api/test').get((req: Request,res: Response) => {
        res.status(200).json({test: 1});
    });

    // rotas de arquivos externos
    app.use((req: Request, res: Response, next: NextFunction) => {
        res.append('Access-Control-Allow-Origin', '*');
        res.append('Access-Control-Allow-Headers', '*');
        res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        next();
    });
    app.use(
        express.json(),
        express.urlencoded({ extended: true }),
    );
    app.use("/api", userRoutes);
    app.use("/api", criptografiaRoutes);
};
export default routes;