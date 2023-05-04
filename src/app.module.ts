require('dotenv').config({ path: __dirname + '/./../.env' });

import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { EducationalInstitution } from './models/educational_institution.model';
import { EducationalInstitutionService } from './services/educational_institution.service';
import { EducationalInstitutionController } from './controllers/educational_institution.controller';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DB_HOST,
      port: 5432,
      username: process.env.DB_USER,
      password: process.env.DB_PWD,
      database: process.env.DB_NAME,
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([EducationalInstitution]),
  ],
  controllers: [EducationalInstitutionController],
  providers: [
    EducationalInstitutionService,
    {
      provide: 'Educational_Institution_Repository',
      useValue: EducationalInstitution,
    },
  ],
})
export class AppModule {}
