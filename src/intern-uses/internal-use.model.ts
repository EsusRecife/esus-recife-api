import { Model, Column, Table } from 'sequelize-typescript';

@Table
export class InternalUse extends Model<InternalUse> {
  @Column
  activity: string;

  @Column
  qtyStudent: number;

  @Column
  qtyEducator: number;

  @Column
  infoStudent: string;

  @Column
  materials: { material: string, qty: number }[];

  @Column 
  inepCod: string;
}
