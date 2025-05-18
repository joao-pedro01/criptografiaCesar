import { CriptografiaService } from "../services/CriptografiaService";

const criptografiaService = new CriptografiaService();

export default class CriptografiaController {
    static async criptografarTexto(req: any, res: any) {
        const { texto, deslocamento } = req.body;
        try {
            const textoCriptografado = await criptografiaService.criptografarTexto(texto, deslocamento);
            res.status(200).json({ textoCriptografado });
        } catch (error) {
            console.error("Erro ao criptografar texto:", error);
            res.status(500).json({ error: "Erro ao criptografar texto" });
        }
    }

    static async descriptografarTexto(req: any, res: any) {
        const { hash } = req.body;
        try {
            const textoDescriptografado = await criptografiaService.descriptografarTexto(hash);
            if (textoDescriptografado === null) {
                return res.status(404).json({ error: "Hash não encontrado" });
            }
            if (textoDescriptografado === false) {
                return res.status(400).json({ error: "Hash já foi usado" });
            }

            return res.status(200).json({ textoDescriptografado });
        } catch (error) {
            console.error("Erro ao descriptografar texto:", error);
            res.status(500).json({ error: "Erro ao descriptografar texto" });
        }
    }
}