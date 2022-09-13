import { Sequelize } from 'sequelize-typescript'
import { Users } from './models/users.model';
require("dotenv/config");

export const connect = () => {
    const hostName: string = process.env.LOCAL_DB_HOST || process.env.HOST || 'localhost';
    const userName: string = process.env.LOCAL_DB_USER || process.env.USER || 'localhost';
    const password: string = ''; //process.env.PASSWORD || '';
    const database: string = process.env.LOCAL_DB || process.env.DB || '';
    const dialect: any = process.env.DIALECT || 'postgres';

    const operatorsAliases: any = 0;

    const sequelize = new Sequelize(database, userName, password, {
        host: hostName,
        dialect,
        operatorsAliases,
        repositoryMode: true,
        pool: {
            max: 10,
            min: 0,
            acquire: 20000,
            idle: 5000
        }
    });

    sequelize.addModels([Users])

    const db: any = {};
    db.Sequelize = Sequelize;
    db.sequelize = sequelize;
    
    return db;

}