import { ManagerController } from "./manager.controller";
import { ManagerService } from "./manager.service";
import { Manager } from "./manager.model";
import { Module } from '@nestjs/common';



@Module({
    controllers:[ManagerController],
    providers: [
        ManagerService,
        {
            provide: 'Manager_Repository',
            useValue: Manager
        }
    ],
    exports:[ManagerService]
})
export class ManagerModule {}