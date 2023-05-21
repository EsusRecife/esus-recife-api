import { Model, Column, Table } from 'sequelize-typescript';

@Table
export class KeyInformation extends Model<KeyInformation> {
  @Column
  amntFoodReceived: number;

  @Column
  amntFoodSpent: number;

  @Column
  foodDestination: string;

  @Column
  foodTypes: string;

  @Column
  retrivalPeriod: string;

  @Column
  retrivalHours: string;

  @Column
  events: boolean;

  @Column
  inepCod: string;
}
