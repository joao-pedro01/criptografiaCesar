import { CriptografiaService } from "../services/CriptografiaService";

const criptografiaService = new CriptografiaService();

export default class CriptografiaController {
    static async criptografarTexto(req: any, res: any) {
        const { texto, deslocamento } = req.body;
        try {
            let resultado = await criptografiaService.criptografarTexto(texto, deslocamento) as { hash: string, resultado: string };
            res.status(200).json({ Hash: resultado.hash, resultado: resultado.resultado });
        } catch (error) {
            console.error("Erro ao criptografar texto:", error);
            res.status(500).json({ message: "Erro ao criptografar texto" });
        }
    }

    static async descriptografarTexto(req: any, res: any) {
        const { hash, mensagem } = req.body;
        try {
            const textoDescriptografado = await criptografiaService.descriptografarTexto(hash, mensagem);
            if (textoDescriptografado === null) {
                return res.status(404).json({ message: "Hash não encontrado" });
            }
            if (textoDescriptografado === false) {
                return res.status(400).json({ message: "Hash já foi usado" });
            }

            return res.status(200).json({ textoDescriptografado });
        } catch (error) {
            console.error("Erro ao descriptografar texto:", error);
            res.status(500).json({ error: "Erro ao descriptografar texto" });
        }
    }
}