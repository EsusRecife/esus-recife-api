import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { KeyInformation } from './key-information.model';
import { Sequelize } from 'sequelize-typescript';
import { QueryTypes } from 'sequelize';

@Injectable()
export class KeyInformationService {
  constructor(
    @Inject('Key_Information_Repository')
    private readonly KeyInformationRepository: typeof KeyInformation,
    private readonly sequelize: Sequelize,
  ) {}

  async findByInepCod(inepCod: string): Promise<KeyInformation> {
    return this.KeyInformationRepository.findOne({ where: { inepCod } });
  }

  async create(
    payload: KeyInformation,
    inepCod: string,
  ): Promise<KeyInformation> {
    payload.inepCod = inepCod;
    return this.KeyInformationRepository.create(payload);
  }

  async weeklyAmnt(inepCod: string): Promise<object> {
    const result = await this.KeyInformationRepository.sequelize.query(
      `
      select sum("amntFoodReceived" - "amntFoodSpent") as collected, date_trunc('week',"createdAt") as week
      from "KeyInformations" 
      where "inepCod" = :inepCod 
      group by date_trunc('week',"createdAt")
      `,
      {
        replacements: { inepCod },
        type: QueryTypes.SELECT,
      },
    );
    return result;
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
    const collected =
      Number(received['amntFoodReceived']) - Number(spent['amntFoodSpent']);
    return collected;
  }
}
