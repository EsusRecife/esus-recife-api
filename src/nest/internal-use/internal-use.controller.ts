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

  @UseGuards(AuthGuard)
  @Post()
  async create(@Body() user: InternalUse): Promise<InternalUse> {
    return this.internalUseService.create(user);
  }

  @UseGuards(AuthGuard)
  @Get()
  async findById(@Request() req): Promise<InternalUse> {
    return this.internalUseService.findByInepCod(
      req.payload.institutionInepCod,
    );
  }

  @UseGuards(AuthGuard)
  @Get('dashboard/activity')
  async getActivity(@Request() req): Promise<object> {
    return this.internalUseService.getActivity(req.payload.institutionInepCod);
  }
}
