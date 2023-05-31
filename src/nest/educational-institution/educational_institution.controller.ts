import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  UseGuards,
  Request,
  ForbiddenException,
} from '@nestjs/common';
import { EducationalInstitution } from './educational_institution.model';
import { EducationalInstitutionService } from './educational_institution.service';
import { AuthGuard } from '../auth/auth.guard';
//import { ApiResponse, ApiBody, ApiHeader } from '@nestjs/swagger';

@Controller('educational-institution')
export class EducationalInstitutionController {
  constructor(private readonly EIService: EducationalInstitutionService) {}

  // @UseGuards(AuthGuard)
  // @Get()
  // async findById(@Request() req): Promise<EducationalInstitution> {
  //   return this.EIService.findById(req.payload.institutionId);
  // }
  @Post()
  // @ApiResponse({
  //   status: 201,
  //   description: 'Register a Educational Institution',
  //   content: {
  //     'application/json': {
  //       schema: {
  //         type: 'object',
  //       },
  //       example: {
  //         id: '0b00d90b-3be8-453f-9376-3a91b1ced3f6',
  //         inepCod: '26118734',
  //         name: 'ESCOLA MUNICIPAL MONTEIRO LOBATO',
  //         cnpj: '03153729000196',
  //         cep: '52040365',
  //         streetNumber: 3124,
  //         cellphone: '558133553486',
  //         email: 'emmonteirolobato@gov.br',
  //         password:
  //           '$2b$04$pFLtLyS9Rm3foM.aCBMI5edDyvewWaYAtspdCq2ElFqCEl30aMQBy',
  //         updatedAt: '2023-05-30T11:57:14.088Z',
  //         createdAt: '2023-05-30T11:57:14.088Z',
  //       },
  //     },
  //   },
  // })
  // @ApiResponse({
  //   status: 401,
  //   description: 'Unauthorized',
  // })
  // @ApiBody({
  //   description: '',
  //   schema: {
  //     type: 'object',
  //     properties: {
  //       inepCod: { type: 'string' },
  //       name: { type: 'string' },
  //       cnpj: { type: 'string' },
  //       cep: { type: 'string' },
  //       streetNumber: { type: 'number' },
  //       cellphone: { type: 'string' },
  //       email: { type: 'string' },
  //       password: { type: 'string' },
  //     },
  //     example: {
  //       inepCod: '26118734',
  //       name: 'ESCOLA MUNICIPAL MONTEIRO LOBATO',
  //       cnpj: '03153729000196',
  //       cep: '52040365',
  //       streetNumber: '3124',
  //       cellphone: '558133553486',
  //       email: 'emmonteirolobato@gov.br',
  //       password: '26118734',
  //     },
  //   },
  // })
  // @ApiHeader({
  //   name: 'Authorization',
  //   description: 'Bearer token',
  // })
  // @ApiHeader({
  //   name: 'Content-Type',
  //   description: 'application/json',
  // })
  async create(
    @Body() user: EducationalInstitution,
  ): Promise<EducationalInstitution> {
    const institution = await this.EIService.findByInepCod(user.inepCod);
    if (institution) {
      throw new ForbiddenException(
        'O código inep digitado já foi cadastrado no nosso banco de dados',
      );
    }

    return this.EIService.create(user);
  }

  // @UseGuards(AuthGuard)
  // @Put()
  // async update(
  //   @Body() user: EducationalInstitution,
  //   @Request() req,
  // ): Promise<[number, EducationalInstitution[]]> {
  //   return this.EIService.update(req.payload.institutionId, user);
  // }

  // @UseGuards(AuthGuard)
  // @Delete(':id')
  // async delete(@Request() req): Promise<number> {
  //   return this.EIService.delete(req.payload.institutionId);
  // }
}
