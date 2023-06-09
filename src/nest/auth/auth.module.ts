require('dotenv').config({ path: __dirname + '/./../../.env' });

import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { EducationalInstitutionModule } from '../educational-institution/educational_institution.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    EducationalInstitutionModule,
    JwtModule.register({
      global: true,
      secret: process.env.JWT_CONSTANT,
      signOptions: { expiresIn: '3600s' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
