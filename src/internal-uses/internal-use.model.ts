import { Model, Column, Table,DataType } from 'sequelize-typescript';

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

  @Column(DataType.ARRAY(DataType.JSONB))
  materials: { material: string, qty: number }[];

  @Column 
  inepCod: string;
}
