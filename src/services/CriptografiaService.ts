import { CriptografiaRepository } from "../repositories/CriptografiaRepository";
import bcrypt from "bcrypt";

export class CriptografiaService {
    private criptografiaRepo = new CriptografiaRepository();

    async criptografarTexto(texto: string, deslocamento: number): Promise<string> {
        const saltRounds = 12;
        const hash = await bcrypt.hash(texto, saltRounds);
        console.log(hash.length);

        // Get ASCII code of each character
        const resultado = texto.split('').map(char => {
            const ascii = char.charCodeAt(0);

            // Letras maiúsculas
            if(ascii >= 65 && ascii <= 90) {
                return String.fromCharCode(((ascii - 65 + deslocamento) % 26) + 65);
            }

            // Letras minúsculas
            if(ascii >= 97 && ascii <= 122) {
                return String.fromCharCode(((ascii - 97 + deslocamento) % 26) + 97);
            }

            // Outros caracteres permanecem inalterados
            return char;
        }).join('');
        console.log('Texto criptografado:', resultado);
        return resultado;
    }



}
