import express from "express";
import CriptografiaController from "../controllers/CriptografiaController";

const router = express.Router();

// rotas para acoes usuarios
router
    .post("/criptografar", CriptografiaController.criptografarTexto)
    .post("/descriptografar", CriptografiaController.descriptografarTexto);

export default router;