import { Injectable, Inject } from '@nestjs/common';
import { EducationalInstitution } from '../models/educational_institution.model';
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

  async create(user: EducationalInstitution): Promise<EducationalInstitution> {
    const salt = await bcrypt.genSalt(4, 'b');
    user.password = await bcrypt.hash(user.password, salt);
    
    return this.EducationalInstitutionRepository.create(user);
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

  async delete(id: number): Promise<number> {
    return this.EducationalInstitutionRepository.destroy({ where: { id } });
  }
}
