import { CriptografiaRepository } from "../repositories/CriptografiaRepository.ts";

export class UserService {
    private userRepo = new CriptografiaRepository();

    async loginUser(userName: string, senha: string) {
        const users = await this.userRepo.findUser({ userName: userName, password: senha, isActive: true });
        return users;
    }
}
