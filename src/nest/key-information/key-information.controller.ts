import { KeyInformationService } from './key-information.service';
import { KeyInformation } from './key-information.model';
import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';

@Controller('key-information')
export class KeyInformationController {
  constructor(private readonly keyInformationRepository: KeyInformationService) {}

  @Post()
  async create(@Body() user: KeyInformation): Promise<KeyInformation> {
    return this.keyInformationRepository.create(user);
  }

  @Get()
  async findById(): Promise<KeyInformation[]> {
    return this.keyInformationRepository.findByInepCod();
  }
}
