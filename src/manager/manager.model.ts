import { Model, Column, Table } from 'sequelize-typescript';

@Table
export class Manager extends Model<Manager> {
  @Column
  name: string;

  @Column
  cpf: string;

  @Column 
  inepCod: number
}
