import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { KeyInformation } from './key-information.model';

@Injectable()
export class KeyInformationService {
  constructor(
    @Inject('Key_Information_Repository')
    private readonly KeyInformationRepository: typeof KeyInformation,
  ) {}

  async findByInepCod(): Promise<KeyInformation[]> {
    return this.KeyInformationRepository.findAll();
  }

  async create(user: KeyInformation): Promise<KeyInformation> {
    return this.KeyInformationRepository.create(user);
  }
}
