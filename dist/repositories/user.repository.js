"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const users_model_1 = require("../database/models/users.model");
const config_1 = require("../database/config");
class UserRepository {
    constructor() {
        this.db = {};
        this.db = (0, config_1.connect)();
        this.db.sequelize.sync();
        this.userRepo = this.db.sequelize.getRepository(users_model_1.Users);
    }
    getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield this.userRepo.findAll();
                return users;
            }
            catch (err) {
                console.log('err', err);
                return [];
            }
        });
    }
}
exports.UserRepository = UserRepository;
