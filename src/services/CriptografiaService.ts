import { CriptografiaRepository } from "../repositories/CriptografiaRepository";
import bcrypt from "bcrypt";

export class CriptografiaService {
    private criptografiaRepo = new CriptografiaRepository();

    async criptografarTexto(texto: string, deslocamento: number): Promise<string> {
        const saltRounds = 12;
        const hash = await bcrypt.hash(texto, saltRounds);
        const resultado = this.criptografaTexto(texto, deslocamento);

        try {
            await this.criptografiaRepo.createHash({
                hash: hash,
                userId: 1, // Substitua pelo ID do usuário real
                deslocamento: deslocamento,
                texto: resultado
            });
        } catch (error) {
            console.error(error);
        }

        return hash;
    }

    async descriptografarTexto(hash: string) {
        const registro = await this.criptografiaRepo.findCriptografia({hash: hash});

        if(!registro) {
            return null;
        }
        if(registro.isUsed) {
            return false;
        }

        try {
            await this.criptografiaRepo.updateHash(registro.id, { isUsed: true });
            return this.criptografaTexto(registro.texto, registro.deslocamento, true);
        } catch (error) {
            console.error("Erro ao descriptografar texto:", error);
            return null;
        }


    }

    criptografaTexto(texto: string, deslocamento: number, inverter = false): string {
        if (inverter) deslocamento = -deslocamento;
        return texto.split('').map(char => {
            const ascii = char.charCodeAt(0);
    
            // Letras maiúsculas
            if (ascii >= 65 && ascii <= 90) {
                return String.fromCharCode(((ascii - 65 + deslocamento + 26) % 26) + 65);
            }
    
            // Letras minúsculas
            if (ascii >= 97 && ascii <= 122) {
                return String.fromCharCode(((ascii - 97 + deslocamento + 26) % 26) + 97);
            }
    
            return char;
        }).join('');
    }



}
