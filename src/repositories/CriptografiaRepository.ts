import { Criptografia } from "@prisma/client";
import prisma from "../config/prisma";

export class CriptografiaRepository {
    findAll() {
        return prisma.criptografia.findMany();
    }
    
    findCriptografia(where: object): Promise<Criptografia | null> {
        return prisma.criptografia.findFirst({
            where: where,
        });
    }

    findById(id: number) {
        return prisma.criptografia.findUnique({ where: { id } });
    }

    createHash(data: { hash: string; userId: number, deslocamento: number, texto: string }) {
        return prisma.criptografia.create({
            data: data,
        });
    }
    
    updateHash(id: number, data: Partial<Criptografia>) {
        return prisma.criptografia.update({
            where: { id },
            data: data,
        });
    }
}
