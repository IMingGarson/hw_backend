import { Table, Column, Model, HasMany } from 'sequelize-typescript'

@Table
export class Users extends Model {
  
  @Column
  id: BigInteger;

  @Column
  account: string;

  @Column
  password: string;

  @Column
  username: string;

  @Column
  last_login: string;

  @Column
  created_at: string;

  @Column
  updated_at: string;
  
}