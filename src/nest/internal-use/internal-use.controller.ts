import { InternalUseService } from './internal-use.service';
import { InternalUse } from './internal-use.model';
import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';

@Controller('internal-use')
export class InternalUseController {
  constructor(private readonly internalUseService: InternalUseService) {}

  @Post()
  async create(@Body() user: InternalUse): Promise<InternalUse> {
    return this.internalUseService.create(user);
  }

  @Get()
  async findById(): Promise<InternalUse[]> {
    return this.internalUseService.findByInepCod();
  }
}
