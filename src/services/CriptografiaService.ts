import { CriptografiaRepository } from "../repositories/CriptografiaRepository";
import bcrypt from "bcrypt";

export class CriptografiaService {
    private criptografiaRepo = new CriptografiaRepository();

    async criptografarTexto(texto: string) {
        const saltRounds = 12;
        const hash = await bcrypt.hash(texto, saltRounds);
        console.log(hash.length);
        
    }
}
