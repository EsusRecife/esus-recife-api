import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Auth } from './auth.model';
import { EducationalInstitutionService } from '../educational-institution/educational_institution.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';


@Injectable()
export class AuthService {
  constructor(
    private educationalInstitutionService: EducationalInstitutionService,
    private jwtService: JwtService
  ) {}

  async signIn(user: Auth) {
    const userId = await this.educationalInstitutionService.findByInepCod(user.inepCod);
    if (!userId) {
        throw new UnauthorizedException('O código inep digitado não foi encontrado no nosso banco de dados');
    }

    const isMatch = await bcrypt.compare(String(user.password), userId.password);
    if (!isMatch) {
        throw new UnauthorizedException('Senha Incorreta');
    }

    const payload = { userId: user.id };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}

