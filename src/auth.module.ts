require('dotenv').config({ path: __dirname + '/./../database.env' });

import { Module } from '@nestjs/common';
import { Auth } from './models/auth.model';
import { AuthService } from './services/auth.service';
import { JwtModule } from '@nestjs/jwt';

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
