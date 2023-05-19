import { InternalUseController } from "./internal-use.controller";
import { InternalUseService } from "./internal-use.service";
import { InternalUse } from "./internal-use.model";
import { Module } from '@nestjs/common';



@Module({
    controllers:[InternalUseController],
    providers: [
        InternalUseService,
        {
            provide: 'Internal_Use_Repository',
            useValue: InternalUse
        }
    ],
    exports:[InternalUseService]
})
export class InternalUseModule {}