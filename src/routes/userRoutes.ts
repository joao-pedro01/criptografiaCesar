import express from "express";
import UserController from "../controllers/UserController";

const router = express.Router();

// rotas para acoes usuarios
router
    .post("/usuarios", UserController.loginUser)

export default router;