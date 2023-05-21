require('dotenv').config({ path: __dirname + '/./../database.env' });

import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from './auth/auth.module';
import { EducationalInstitutionModule } from './educational-institution/educational_institution.module';
import { EducationalInstitution } from './educational-institution/educational_institution.model';
import { ManagerModule } from './manager/manager.module';
import { Manager } from './manager/manager.model';
import { InternalUse } from './internal-use/internal-use.model';
import { InternalUseModule } from './internal-use/internal-use.module';
import { KeyInformation } from './key-information/key-information.model';
import { KeyInformationModule } from './key-information/key-information.module';
@Module({
  imports: [
    EducationalInstitutionModule,
    ManagerModule,
    InternalUseModule,
    KeyInformationModule,
    AuthModule,
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
    SequelizeModule.forFeature([EducationalInstitution, Manager, InternalUse,KeyInformation]),
  ],
})
export class AppModule {}
