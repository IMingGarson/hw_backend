import { Sequelize } from 'sequelize-typescript'
import { Users } from './models/users.model';

export const connect = () => {

    const hostName: string = process.env.HOST || 'localhost';
    const userName: string = process.env.USER || 'localhost';
    const password: string = process.env.PASSWORD || '';
    const database: string = process.env.DB || '';
    const dialect: any = process.env.DIALECT || 'postgres';

    console.log('dialect  ', dialect)

    const operatorsAliases: any = false;

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

    sequelize.addModels([Users]);

    const db: any = {};
    db.Sequelize = Sequelize;
    db.sequelize = sequelize;
    
    return db;

}