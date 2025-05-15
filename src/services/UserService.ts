import { UserRepository } from "../repositories/UserRepository";

export class UserService {
    private userRepo = new UserRepository();

    async loginUser(userName: string, senha: string) {
        const users = await this.userRepo.findUser({ userName: userName, password: senha, isActive: true });
        return users;
    }
}
