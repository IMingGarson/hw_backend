import { Users } from "../database/models/users.model";
import { connect } from "../database/config";

export class UserRepository {
    private db: any = {};
    private userRepo: any;

    constructor() {
        this.db = connect();
        this.db.sequelize.sync({ force: true }).then(() => {
            console.log("Drop and re-sync db.");
        });
        this.userRepo = this.db.sequelize.getRepository(Users);
    }

    async getUsers() {
        try {
            const users = await this.userRepo.findAll();
            return users;
        } catch (err) {
            console.log('err', err);
            return [];
        }
    }
}