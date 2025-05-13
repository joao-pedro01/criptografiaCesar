import prisma from "../config/prisma";

export class UserRepository {
    findAll() {
        return prisma.user.findMany();
    }
    
    findUser(where: object): Promise<object | null> {
        return prisma.user.findFirst({
            where: where,
        });
    }

    findById(id: number) {
        return prisma.user.findUnique({ where: { id } });
    }
}
