import { Model, Column, Table } from 'sequelize-typescript';

@Table
export class Auth extends Model<Auth> {
  @Column
  inepCod: string;

  @Column
  password: string;
}
