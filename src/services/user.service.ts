import { UserRepository } from "../repositories/user.repository";

export class UserService {
    private userRepo: UserRepository;

    constructor() {
        this.userRepo = new UserRepository();
    }

    async getUsers() {
        return await this.userRepo.getUsers();
    }
}