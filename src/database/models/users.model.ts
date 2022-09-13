import { Table, Column, Model } from 'sequelize-typescript'

@Table({
  tableName: 'users'
})
export class Users extends Model<Users> {
  
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column
  account: string;

  @Column
  password: string;

  @Column
  username: string;

  @Column
  lastLoginAt: Date;
  
}