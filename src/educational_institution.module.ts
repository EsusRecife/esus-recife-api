import { Module } from '@nestjs/common';
import { EducationalInstitution } from './models/educational_institution.model';
import { EducationalInstitutionService } from './services/educational_institution.service';
import { EducationalInstitutionController } from './controllers/educational_institution.controller';

@Module({
  controllers: [EducationalInstitutionController],
  providers: [
    EducationalInstitutionService,
    {
      provide: 'Educational_Institution_Repository',
      useValue: EducationalInstitution,
    },
  ],
  exports:[EducationalInstitutionService]

})
export class EducationalInstitutionModule {}
