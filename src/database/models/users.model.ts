import { Table, Column, Model } from 'sequelize-typescript'

@Table
export class Users extends Model {
  
  @Column({ primaryKey: true })
  id!: number;

  @Column
  account!: string;

  @Column
  password!: string;

  @Column
  username!: string;

  @Column
  last_login_at: Date;

  @Column
  created_at: Date;

  @Column
  updated_at: Date;

  @Column
  delete_at: Date;
  
}