import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  UseGuards
} from '@nestjs/common';
import { EducationalInstitution } from './educational_institution.model';
import { EducationalInstitutionService } from './educational_institution.service';
import { AuthGuard } from '../auth/auth.guard';

@Controller('educational-institution')
export class EducationalInstitutionController {
  constructor(private readonly EIService: EducationalInstitutionService) {}

  @UseGuards(AuthGuard) 
  @Get()
  async findAll(): Promise<EducationalInstitution[]> {
    return this.EIService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: number): Promise<EducationalInstitution> {
    return this.EIService.findById(id);
  }

  @Post()
  async create(
    @Body() user: EducationalInstitution,
  ): Promise<EducationalInstitution> {
    return this.EIService.create(user);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() user: EducationalInstitution,
  ): Promise<[number, EducationalInstitution[]]> {
    return this.EIService.update(id, user);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<number> {
    return this.EIService.delete(id);
  }
}
