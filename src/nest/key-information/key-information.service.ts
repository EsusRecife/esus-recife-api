import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { KeyInformation } from './key-information.model';
import { Sequelize } from 'sequelize';

@Injectable()
export class KeyInformationService {
  constructor(
    @Inject('Key_Information_Repository')
    private readonly KeyInformationRepository: typeof KeyInformation,
  ) {}

  async findByInepCod(inepCod: string): Promise<KeyInformation> {
    return this.KeyInformationRepository.findOne({ where: { inepCod } });
  }

  async create(user: KeyInformation): Promise<KeyInformation> {
    return this.KeyInformationRepository.create(user);
  }
  
  async getFood(inepCod: string): Promise<number> {
    const received = await this.KeyInformationRepository.findOne({
      where: { inepCod },
      attributes: [
        [
          Sequelize.fn('avg', Sequelize.col('amntFoodReceived')),
          'amntFoodReceived',
        ],
      ],
      raw: true,
    });

    const spent = await this.KeyInformationRepository.findOne({
      where: { inepCod },
      attributes: [
        [Sequelize.fn('avg', Sequelize.col('amntFoodSpent')), 'amntFoodSpent'],
      ],
      raw: true,
    });
    console.log(received, spent);
    const collected =
      Number(received['amntFoodReceived']) - Number(spent['amntFoodSpent']);
    return collected;
  }
}
