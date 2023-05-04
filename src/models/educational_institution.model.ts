import { Model, Column, Table } from 'sequelize-typescript';

@Table
export class EducationalInstitution extends Model<EducationalInstitution> {
  @Column
  inepCod: number;

  @Column
  name: string;

  @Column
  cnpj: string;

  @Column
  cep: string;

  @Column
  streetNumber: number;

  @Column
  email: string;

  @Column
  password: string;

  @Column
  startedAt: string;
}
