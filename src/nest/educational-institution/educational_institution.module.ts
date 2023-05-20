import { Module } from '@nestjs/common';
import { EducationalInstitution } from './educational_institution.model';
import { EducationalInstitutionService } from './educational_institution.service';
import { EducationalInstitutionController } from './educational_institution.controller';

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
