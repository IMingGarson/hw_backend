"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let Users = class Users extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column
], Users.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column
], Users.prototype, "account", void 0);
__decorate([
    sequelize_typescript_1.Column
], Users.prototype, "password", void 0);
__decorate([
    sequelize_typescript_1.Column
], Users.prototype, "username", void 0);
__decorate([
    sequelize_typescript_1.Column
], Users.prototype, "last_login", void 0);
__decorate([
    sequelize_typescript_1.Column
], Users.prototype, "created_at", void 0);
__decorate([
    sequelize_typescript_1.Column
], Users.prototype, "updated_at", void 0);
Users = __decorate([
    sequelize_typescript_1.Table
], Users);
exports.Users = Users;
