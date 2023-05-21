import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { InternalUse } from './internal-use.model';

@Injectable()
export class InternalUseService {
  constructor(
    @Inject('Internal_Use_Repository')
    private readonly InternalUseRepository: typeof InternalUse,
  ) {}

  async findByInepCod(inepCod: string): Promise<InternalUse> {
    return this.InternalUseRepository.findOne({ where: { inepCod } });
  }

  async create(payload: InternalUse): Promise<InternalUse> {
    return this.InternalUseRepository.create(payload);
  }
}
