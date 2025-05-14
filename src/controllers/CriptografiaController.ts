import { CriptografiaService } from "../services/CriptografiaService.ts";

const criptografiaService = new CriptografiaService();

export default class CriptografiaController {
    static async criptografarTexto(req: any, res: any) {
        const { texto } = req.body;
        try {
            const textoCriptografado = await criptografiaService.criptografarTexto(texto);
            res.status(200).json({ textoCriptografado });
        } catch (error) {
            console.error("Erro ao criptografar texto:", error);
            res.status(500).json({ error: "Erro ao criptografar texto" });
        }
    }

    // static async descriptografarTexto(req: any, res: any) {
    //     const { textoCriptografado } = req.body;
    //     try {
    //         const textoDescriptografado = await criptografiaService.descriptografarTexto(textoCriptografado);
    //         res.status(200).json({ textoDescriptografado });
    //     } catch (error) {
    //         console.error("Erro ao descriptografar texto:", error);
    //         res.status(500).json({ error: "Erro ao descriptografar texto" });
    //     }
    // }
}