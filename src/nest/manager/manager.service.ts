import {
  Inject,
  Injectable,
  UnauthorizedException,
  NotAcceptableException,
} from '@nestjs/common';
import { Manager } from './manager.model';

@Injectable()
export class ManagerService {
  constructor(
    @Inject('Manager_Repository')
    private readonly ManagerRepository: typeof Manager,
  ) {}

  async findByInepCod(inepCod: string): Promise<Manager> {
    return this.ManagerRepository.findOne({ where: { inepCod } });
  }

  async create(payload: Manager): Promise<Manager> {
    if (!payload.inepCod || !payload.cpf || !payload.name) {
      throw new NotAcceptableException('Campos incompletos');
    }
    return this.ManagerRepository.create(payload);
  }
}
