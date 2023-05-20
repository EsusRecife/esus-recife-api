import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  UseGuards,
  Request
} from '@nestjs/common';
import { EducationalInstitution } from './educational_institution.model';
import { EducationalInstitutionService } from './educational_institution.service';
import { AuthGuard } from '../auth/auth.guard';

@Controller('educational-institution')
export class EducationalInstitutionController {
  constructor(private readonly EIService: EducationalInstitutionService) {}

  @UseGuards(AuthGuard) 
  @Get()
  async findById(@Request() req): Promise<EducationalInstitution> {
    return this.EIService.findById(req.payload.institutionId);
  }

  @Post()
  async create(
    @Body() user: EducationalInstitution,
  ): Promise<EducationalInstitution> {
    return this.EIService.create(user);
  }

  @UseGuards(AuthGuard)
  @Put()
  async update(
    @Body() user: EducationalInstitution,
    @Request() req
  ): Promise<[number, EducationalInstitution[]]> {
    return this.EIService.update(req.payload.institutionId, user);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  async delete(
    @Request() req
  ): Promise<number> {
    return this.EIService.delete(req.payload.institutionId);
  }
}
