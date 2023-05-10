require('dotenv').config({ path: __dirname + '/./../../jwt.env' });

import { Module } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { AuthController } from '../controllers/auth.controller';
import { EducationalInstitutionModule } from './educational_institution.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    EducationalInstitutionModule,
    JwtModule.register({
      global: true,
      secret: process.env.JWT_CONSTANT,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports:[AuthService]
})
export class AuthModule {}
