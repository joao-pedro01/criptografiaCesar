import prisma from "../config/prisma";

export class CriptografiaRepository {
    findAll() {
        return prisma.criptografia.findMany();
    }
    
    findUser(where: object): Promise<object | null> {
        return prisma.criptografia.findFirst({
            where: where,
        });
    }

    findById(id: number) {
        return prisma.criptografia.findUnique({ where: { id } });
    }
}
