import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { Manager } from './manager.model';

@Injectable()
export class ManagerService {
    constructor(
        @Inject('Manager_Repository')
        private readonly ManagerRepository: typeof Manager
    ) {}

    async findByInepCod(inepCod: number): Promise<Manager> {
        return this.ManagerRepository.findOne({where: {inepCod} })
    }

    async create(user: Manager): Promise<Manager> {
        return this.ManagerRepository.create(user);
    }

}