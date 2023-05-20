import { Model, Column, Table } from 'sequelize-typescript';

@Table
export class EducationalInstitution extends Model<EducationalInstitution> {
  @Column
  inepCod: string;

  @Column
  name: string;

  @Column
  cnpj: string;

  @Column
  cep: string;

  @Column
  streetNumber: number;

  @Column
  cellphone: number;

  @Column
  email: string;

  @Column
  password: string;
}
