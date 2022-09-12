import { UserService } from "../services/user.service";

export class UserController {
    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    async getUsers() {
        return await this.userService.getUsers();
    }
}