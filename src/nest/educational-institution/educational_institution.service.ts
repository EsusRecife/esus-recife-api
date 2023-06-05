import { Injectable, Inject } from '@nestjs/common';
import { EducationalInstitution } from './educational_institution.model';
import * as bcrypt from 'bcrypt';

@Injectable()
export class EducationalInstitutionService {
  constructor(
    @Inject('Educational_Institution_Repository')
    private readonly EducationalInstitutionRepository: typeof EducationalInstitution,
  ) {}

  async findAll(): Promise<EducationalInstitution[]> {
    return this.EducationalInstitutionRepository.findAll();
  }

  async findById(id: number): Promise<EducationalInstitution> {
    return this.EducationalInstitutionRepository.findByPk(id);
  }

  async findByInepCod(inepCod: string): Promise<EducationalInstitution> {
    return this.EducationalInstitutionRepository.findOne({
      where: { inepCod },
    });
  }

  async create(
    payload: EducationalInstitution,
  ): Promise<EducationalInstitution> {
    const salt = await bcrypt.genSalt(4, 'b');
    payload.password = await bcrypt.hash(payload.password, salt);
    return this.EducationalInstitutionRepository.create(payload);
  }

  async update(
    id: number,
    user: EducationalInstitution,
  ): Promise<[number, EducationalInstitution[]]> {
    return this.EducationalInstitutionRepository.update(user, {
      returning: true,
      where: { id },
    });
  }

  async delete(inepCod: string): Promise<any> {
    return this.EducationalInstitutionRepository.destroy({
      where: { inepCod },
    });
  }
}
