import { UserService } from "../services/UserService";
import bcrypt from 'bcrypt';

const userService = new UserService();

export default class UserController {
    static async loginUser(req: any, res: any) {
        const { userName, password } = req.body;
        try {
            const hashedPassword = await bcrypt.hash(password, 10);
            console.log(hashedPassword);
            
            if(await userService.loginUser(userName, password) != null) {
                res.status(200).json(true);
            } else {
                res.status(401).json(false);
            }
        } catch (error) {
            console.error("Erro ao fazer login:", error);
            res.status(500).json({ error: "Erro ao listar usuários" });
        }
    }

    static async cadastrarUsuario(req: any, res: any) {
        try {
            const usuario = await userService.cadastrarUsuario(req.body);
            res.status(201).json(usuario);
        } catch (error) {
            res.status(500).json({ error: "Erro ao cadastrar usuário" });
        }
    }
}