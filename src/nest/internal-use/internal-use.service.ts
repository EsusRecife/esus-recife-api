import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { InternalUse } from './internal-use.model';
import { Sequelize } from 'sequelize';

@Injectable()
export class InternalUseService {
  constructor(
    @Inject('Internal_Use_Repository')
    private readonly InternalUseRepository: typeof InternalUse,
  ) {}

  async findByInepCod(inepCod: string): Promise<InternalUse> {
    return this.InternalUseRepository.findOne({ where: { inepCod } });
  }

  async create(payload: InternalUse, inepCod: string): Promise<InternalUse> {
    payload.inepCod = inepCod;
    return this.InternalUseRepository.create(payload);
  }

  async getActivity(inepCod: string): Promise<object> {
    const activity = await this.InternalUseRepository.findOne({
      where: { inepCod },
      group: ['activity'],
      attributes: [
        [Sequelize.fn('MAX', Sequelize.col('qtyStudent')), 'max'],
        'activity',
      ],
      order: [['max', 'DESC']],
      limit: 1,
    });
    return activity['dataValues'];
  }
}
